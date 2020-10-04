import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import { postMessage } from '../../_utils/extension';
import { ButtonLargePrimary } from '../../atoms/button';
import Select from '../../atoms/select';
import Input from '../../atoms/input';
import { ErrorMessage } from '../../atoms/messages';
import Icon from '../../atoms/icon';
import Extension from '../../templates/extension';
import Section from '../../molecules/section';
import Expandable from '../../molecules/expandable';
import Form from '../../molecules/form';

class Add extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    name: PropTypes.string,
    url: PropTypes.string,
    note: PropTypes.string,
    enableNotes: PropTypes.bool.isRequired,
    getDashboards: PropTypes.func.isRequired,
    changeDashboard: PropTypes.func.isRequired,
    dashboardsPending: PropTypes.bool,
    activeDashboard: PropTypes.number.isRequired,
    categories: PropTypes.array.isRequired,
    dashboards: PropTypes.array.isRequired,
    addBookmark: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired
  }

  state = {
    activeCategory: localStorage.getItem('activeCategory') || '',
    pending: false,
    error: null,
    name: this.props.name,
    url: this.props.url,
    note: this.props.note
  }

  componentDidMount() {
    const { getDashboards } = this.props;

    getDashboards();
  }

  componentDidUpdate(prevProps) {
    const { categories } = this.props;

    // if (dashboards.length > prevProps.dashboards.length && prevProps.dashboards.length !== 0) {
    //   changeDashboard(dashboards[dashboards.length - 1].id);
    // }

    if (categories.length > prevProps.categories.length && prevProps.categories.length !== 0) {
      const categoryId = categories[categories.length - 1].id;

      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        activeCategory: categoryId
      });
      localStorage.setItem('activeCategory', categoryId);
    }
  }

  toggleLocation = () => {
    const showLocation = localStorage.getItem('showLocation') === 'true';

    localStorage.setItem('showLocation', !showLocation);
  }

  toggleData = () => {
    const showData = localStorage.getItem('showData') === 'true';

    localStorage.setItem('showData', !showData);
  }

  handleDashboardChange = (value) => {
    this.props.changeDashboard(parseInt(value, 10));
  }

  handleCategoryChange = (value) => {
    localStorage.setItem('activeCategory', value);

    this.setState({
      activeCategory: value
    });
  }

  handleInputChange = (value, name) => {
    this.setState({
      [name]: value,
      pending: false
    });
  }

  onAddCategoryClick = () => {
    this.props.openModal('AddCategory');
  }

  onAddDashboardClick = () => {
    this.props.openModal('AddDashboard');
  }

  handleSubmit = (params) => {
    const { addBookmark } = this.props;

    this.setState({
      pending: true,
      error: null
    });

    addBookmark({
      ...params,
      onSuccess: () => {
        this.setState({
          pending: false
        });

        // Close the extension
        postMessage({
          close: true
        });
      },
      onError: (error) => {
        this.setState({
          pending: false,
          error
        });
      }
    });
  }

  render() {
    const {
      intl,
      enableNotes,
      dashboardsPending,
      categories,
      dashboards,
      activeDashboard
    } = this.props;
    const {
      activeCategory,
      error,
      pending,
      name: stateName,
      url: stateUrl,
      note: stateNote
    } = this.state;
    const showLocation = localStorage.getItem('showLocation');
    const showData = localStorage.getItem('showData');
        
    if (!showLocation) {
      localStorage.setItem('showLocation', true);
    }

    if (!showData) {
      localStorage.setItem('showData', false);
    }

    return (
      <Extension>
        <Section noMargin>
          <Form onSubmit={ this.handleSubmit }>
            <ButtonLargePrimary
              className="add__add-button"
              type="submit"
              pending={ pending }
              disabled={ pending }
              icon="add-link"
            >
              <FormattedMessage id="extension.addButton" values={ { b: (msg) => <b>{msg}</b> } } />
            </ButtonLargePrimary>
            { error && <ErrorMessage message={ error } hasIcon /> }
            <hr className="add__hr" />
            <Expandable
              headline={ <FormattedMessage id="extension.location" /> }
              className="add__section"
              open={ localStorage.getItem('showLocation') === 'true' }
              onClick={ this.toggleLocation }
            >
              <>
                <span className="add__location-wrapper">
                  <Select
                    id="collection"
                    label={ intl.formatMessage({ id: 'modal.editCategoryDashboard' }) }
                    options={ dashboards.map(({ name: text, id }) => ({
                      text,
                      value: id.toString()
                    })) }
                    required
                    onChange={ this.handleDashboardChange }
                    value={ activeDashboard }
                    disabled={ dashboardsPending || pending }
                    name="dashboardId"
                  />
                  <Icon
                    icon="add-collection"
                    label={ intl.formatMessage({ id: 'modal.addDashboard' }) }
                    onClick={ this.onAddDashboardClick }
                    useSkeleton={ dashboardsPending }
                    isButton
                  />
                </span>
                <span className="add__location-wrapper">
                  <Select
                    id="category"
                    label={ intl.formatMessage({ id: 'modal.category' }) }
                    options={ categories.map(({ name: text, id }) => ({
                      text,
                      value: id.toString()
                    })) }
                    required
                    onChange={ this.handleCategoryChange }
                    value={ activeCategory }
                    disabled={ dashboardsPending || pending }
                    name="categoryId"
                  />
                  <Icon
                    icon="add-category"
                    label={ intl.formatMessage({ id: 'modal.addCategory' }) }
                    onClick={ this.onAddCategoryClick }
                    useSkeleton={ dashboardsPending }
                    isButton
                  />
                </span>
              </>
            </Expandable>
            <Expandable
              headline={ <FormattedMessage id="extension.data" /> }
              className="add__section"
              open={ localStorage.getItem('showData') === 'true' }
              onClick={ this.toggleData }
            >
              <>
                <Input
                  id="bookmark-name"
                  name="name"
                  value={ stateName }
                  onChange={ this.handleInputChange }
                  required
                  maxLength="200"
                  label={ intl.formatMessage({ id: 'modal.name' }) }
                  disabled={ pending }
                />
                <Input
                  id="bookmark-url"
                  name="url"
                  value={ stateUrl }
                  onChange={ this.handleInputChange }
                  required
                  maxLength="2000"
                  label={ intl.formatMessage({ id: 'modal.url' }) }
                  disabled={ pending }
                  inputMode="url"
                  placeholder={ intl.formatMessage({id: 'modal.urlPlaceholder'}) }
                />
                { enableNotes && (
                  <Input
                    id="bookmark-note"
                    name="note"
                    value={ stateNote }
                    onChange={ this.handleInputChange }
                    maxLength="100"
                    label={ intl.formatMessage({ id: 'modal.note' }) }
                    disabled={ pending }
                  />
                ) }
              </>
            </Expandable>
          </Form>
        </Section>
      </Extension>
    );
  }
}

export default injectIntl(Add);
