import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import { ButtonSmallPrimary } from '../../atoms/button';
import Label from '../../atoms/label';
import Select from '../../atoms/select';
import Input from '../../atoms/input';
import Checkbox from '../../atoms/checkbox';
// import { H1 } from '../../atoms/headline';
// import P from '../../atoms/paragraph';
import Extension from '../../templates/extension';
import Section from '../../molecules/section';
import Expandable from '../../molecules/expandable';

class Add extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    title: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.string,
    favicon: PropTypes.string
  }

  render() {
    const { intl, title, url, description, favicon } = this.props;
    // const { locationOpen, dataOpen } = this.state;

    return (
      <Extension>
        <Section>
          <ButtonSmallPrimary className="add__add-button" contentBefore icon="add-link">
            <FormattedMessage id="extension.addButton" />
          </ButtonSmallPrimary>
          <hr className="add__hr" />
          <Expandable headline={ <FormattedMessage id="extension.location" /> } className="help-container__item">
            <>
              <Label htmlFor="collections">
                <FormattedMessage id="modal.editCategoryDashboard" />
              </Label>
              <Select id="collections" options={ [{ text: 'Banana',
                value: 'banana' }] } />
              <Label htmlFor="categories">
                <FormattedMessage id="modal.category" />
              </Label>
              <Select id="categories" options={ [{ text: 'Banana',
                value: 'banana' }] } />
            </>
          </Expandable>
          <hr className="add__hr" />
          <Expandable headline={ <FormattedMessage id="extension.data" /> } className="help-container__item">
            <>
              <Input
                id="bookmark-url"
                name="url"
                value={ url }
                onChange={ this.onUrlChange }
                onBlur={ this.onUrlBlur }
                required
                maxLength="2000"
                label={ intl.formatMessage({ id: 'modal.url' }) }
                // disabled={ pending }
                inputMode="url"
                placeholder={ intl.formatMessage({id: 'modal.urlPlaceholder'}) }
              />
              <Input
                id="bookmark-name"
                name="name"
                value={ title }
                onChange={ this.onNameChange }
                required
                maxLength="200"
                label={ intl.formatMessage({ id: 'modal.name' }) }
                // disabled={ pending }
                // pending={ bookmarkTitlePending }
              />
            </>
          </Expandable>
        </Section>
      </Extension>
    );
  }
}

export default injectIntl(Add);
