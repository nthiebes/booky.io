import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import Select from '../../atoms/select';
import Extension from '../../templates/extension';
import Section from '../../molecules/section';
import SearchField from '../../molecules/search-field';
import Category from '../../molecules/category';
import Search from '../../organisms/search';

class Open extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    getDashboards: PropTypes.func.isRequired,
    changeDashboard: PropTypes.func.isRequired,
    dashboardsPending: PropTypes.bool,
    activeDashboard: PropTypes.number.isRequired,
    categories: PropTypes.array.isRequired,
    dashboards: PropTypes.array.isRequired,
    keywordExists: PropTypes.bool,
    getBookmarks: PropTypes.func.isRequired
  };

  state = {
    activeCategory: localStorage.getItem('activeCategory') || ''
  };

  componentDidMount() {
    const { getDashboards } = this.props;

    getDashboards();
  }

  handleDashboardChange = (value) => {
    this.props.changeDashboard(parseInt(value, 10));
  };

  handleCategoryChange = (value) => {
    localStorage.setItem('activeCategory', value);

    this.props.getBookmarks(parseInt(value, 10));

    this.setState({
      activeCategory: value
    });
  };

  render() {
    const {
      intl,
      dashboardsPending,
      categories,
      dashboards,
      activeDashboard,
      keywordExists
    } = this.props;
    const { activeCategory } = this.state;
    let categoryData = categories.find(
      (category) => parseInt(activeCategory, 10) === category.id
    );

    if (!categoryData && categories.length) {
      categoryData = categories[0];
    }

    const dashboardsOptions = dashboardsPending
      ? [
          {
            text: intl.formatMessage({ id: 'extension.loading' }),
            value: ''
          }
        ]
      : dashboards.map(({ name: text, id }) => ({
          text,
          value: id.toString()
        }));
    const categoriesOptions = dashboardsPending
      ? [
          {
            text: intl.formatMessage({ id: 'extension.loading' }),
            value: ''
          }
        ]
      : categories.map(({ name: text, id }) => ({
          text,
          value: id.toString()
        }));

    return (
      <Extension>
        <Section noMargin>
          <Select
            id="collection"
            label={intl.formatMessage({ id: 'modal.editCategoryDashboard' })}
            options={dashboardsOptions}
            required
            onChange={this.handleDashboardChange}
            value={activeDashboard}
            disabled={dashboardsPending}
            name="dashboardId"
          />
          <Select
            id="category"
            label={intl.formatMessage({ id: 'modal.category' })}
            options={categoriesOptions}
            required
            onChange={this.handleCategoryChange}
            value={activeCategory}
            disabled={dashboardsPending}
            name="categoryId"
          />
          <SearchField className="open__search-field" id="search-extension" />
          {categoryData && !keywordExists && !dashboardsPending && (
            <Category {...categoryData} />
          )}
          {keywordExists && <Search className="open__search" />}
        </Section>
      </Extension>
    );
  }
}

export default injectIntl(Open);
