import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import Base from '../Base';
import Input from '../../../atoms/input';
import Paragraph from '../../../atoms/paragraph';
import Select from '../../../atoms/select';
import { ErrorMessage } from '../../../atoms/messages';

class MoveCategory extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    intl: PropTypes.object.isRequired,
    pending: PropTypes.bool,
    darkMode: PropTypes.bool,
    getCategories: PropTypes.func.isRequired,
    categoriesPending: PropTypes.bool,
    categoriesError: PropTypes.string,
    categories: PropTypes.array,
    addCategory: PropTypes.func.isRequired,
    removeBookmark: PropTypes.func.isRequired
  };

  state = {
    categoryId: null,
    categoryName: '',
    addCategoryPending: false,
    addCategoryError: null
  };

  componentDidMount() {
    const { data, getCategories } = this.props;

    getCategories(data.dashboardId);
  }

  onCategoryChange = (value) => {
    this.setState({
      categoryId: value
    });
  };

  handleCategoryNameChange = (value) => {
    this.setState({
      categoryName: value
    });
  };

  handleSave = (formData) => {
    const { data, addCategory, onSave, removeBookmark } = this.props;

    // Category exists
    if (formData.categoryId) {
      onSave({
        ...formData,
        onSuccess: () => {
          removeBookmark({
            id: data.bookmarkId,
            categoryId: data.categoryId
          });
        }
      });
      return;
    }

    // No category exists
    this.setState({
      addCategoryPending: true
    });

    addCategory({
      dashboardId: data.dashboardId,
      color: 'color9',
      name: formData.name,
      shouldUpdate: false,
      onSuccess: (categoryId) => {
        onSave({
          id: data.bookmarkId,
          categoryId,
          position: formData.position,
          onSuccess: () => {
            removeBookmark({
              id: data.bookmarkId,
              categoryId: data.categoryId
            });
          }
        });
        this.setState({
          addCategoryPending: false
        });
      },
      onError: (error) => {
        this.setState({
          addCategoryError: error,
          addCategoryPending: false
        });
      }
    });
  };

  render() {
    const {
      intl,
      pending,
      data,
      categories,
      categoriesError,
      categoriesPending,
      ...props
    } = this.props;
    const { categoryName, addCategoryPending, addCategoryError } = this.state;
    const dashboardName = data.dashboards.find(
      (dashboard) => dashboard.id === data.dashboardId
    ).name;
    const options = [
      ...categories.map(({ id, name }) => ({
        text: name,
        value: id
      }))
    ];

    return (
      <Base
        {...props}
        pending={addCategoryPending || pending}
        headline={intl.formatMessage({ id: 'bookmark.drag' })}
        onSave={this.handleSave}
      >
        {!categories.length && !categoriesPending && !categoriesError ? (
          <>
            <Paragraph>
              <i>
                <FormattedMessage
                  id="category.empty"
                  values={{ collection: <b>{dashboardName}</b> }}
                />
              </i>
            </Paragraph>
            <Input
              id="category-name"
              name="name"
              color="primary"
              value={categoryName}
              onChange={this.handleCategoryNameChange}
              required
              maxLength="200"
              label={intl.formatMessage({ id: 'modal.name' })}
              disabled={pending || addCategoryPending}
            />
          </>
        ) : (
          <Select
            id="bookmark-category"
            label={intl.formatMessage({ id: 'modal.category' })}
            options={options}
            onChange={this.onCategoryChange}
            selected={categories.length ? categories[0].id.toString() : null}
            name="categoryId"
            required
            disabled={pending || categoriesPending}
            pending={categoriesPending}
          />
        )}
        {(categoriesError || addCategoryError) && (
          <ErrorMessage message={categoriesError || addCategoryError} hasIcon />
        )}
        <Input name="position" value="1" type="hidden" />
        <Input name="id" value={data.bookmarkId.toString()} type="hidden" />
      </Base>
    );
  }
}

export default injectIntl(MoveCategory);
