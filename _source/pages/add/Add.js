import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import { ButtonLargePrimary } from '../../atoms/button';
import Select from '../../atoms/select';
import Input from '../../atoms/input';
import { ErrorMessage } from '../../atoms/messages';
// import { H1 } from '../../atoms/headline';
// import P from '../../atoms/paragraph';
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
    favicon: PropTypes.string,
    enableNotes: PropTypes.bool.isRequired,
    getDashboards: PropTypes.func.isRequired,
    changeDashboard: PropTypes.func.isRequired,
    dashboardsPending: PropTypes.bool,
    activeDashboard: PropTypes.number.isRequired,
    categories: PropTypes.array.isRequired,
    dashboards: PropTypes.array.isRequired
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

  handleSubmit = (params) => {
    console.log(params);
    // const { history, login, match, isExtension } = this.props;
    // const { action } = match.params;

    // this.setState({
    //   pending: true,
    //   error: null
    // });

    // login({
    //   params,
    //   onSuccess: () => {
    //     document.title = 'booky';

    //     if (action) {
    //       history.push('/account');
    //     } else {
    //       history.push(isExtension ? '/extension/add' : '/');
    //     }
    //   },
    //   onError: (error) => {
    //     this.setState({
    //       pending: false,
    //       error
    //     });
    //   }
    // });
  }

  render() {
    const {
      intl,
      enableNotes,
      dashboardsPending,
      categories,
      dashboards,
      activeDashboard,
      name,
      url,
      note
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
        <Section>
          <Form onSubmit={ this.handleSubmit }>
            <ButtonLargePrimary className="add__add-button" contentBefore type="submit" pending={ pending }>
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
                  value={ name }
                  onChange={ this.handleInputChange }
                  required
                  maxLength="200"
                  label={ intl.formatMessage({ id: 'modal.name' }) }
                  disabled={ pending }
                />
                <Input
                  id="bookmark-url"
                  name="url"
                  value={ url }
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
                    value={ note }
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
