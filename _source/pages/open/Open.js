import React, { Component } from 'react';
import { injectIntl } from 'react-intl';

import { postMessage } from '../../_utils/extension';
import Select from '../../atoms/select';
import Icon from '../../atoms/icon';
import Extension from '../../templates/extension';
import Section from '../../molecules/section';
import SearchField from '../../molecules/search-field';
import Category from '../../molecules/category';
import Search from '../../organisms/search';

class Open extends Component {
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

  openAllBookmarks = (bookmarks) => {
    // The iframe can't open several tabs itself (popup blocker), so the
    // extension does it
    postMessage({
      openTabs: bookmarks.map(({ url }) => url)
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
          <div className="open__category-wrapper">
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
            <Icon
              icon="open"
              label={intl.formatMessage({ id: 'modal.openAllBookmarks' })}
              onClick={() => this.openAllBookmarks(categoryData.bookmarks)}
              useSkeleton={dashboardsPending || !categoryData}
              isButton
              tooltipDirection="left"
            />
          </div>
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
