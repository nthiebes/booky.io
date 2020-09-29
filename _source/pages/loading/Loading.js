import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Page from '../../templates/page';
import Extension from '../../templates/extension';
import Section from '../../molecules/section';
import Icon from '../../atoms/icon';

export default class Loading extends Component {
  static propTypes = {
    isExtension: PropTypes.bool.isRequired
  }

  render() {
    const TemplateComponent = this.props.isExtension ? Extension : Page;

    return (
      <TemplateComponent>
        <Section>
          <Icon icon="spinner" className="loading-page__spinner" />
        </Section>
      </TemplateComponent>
    );
  }
}
