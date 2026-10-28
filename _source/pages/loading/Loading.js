import React, { Component } from 'react';

import Page from '../../templates/page';
import Extension from '../../templates/extension';
import Fullscreen from '../../templates/fullscreen';
import Section from '../../molecules/section';
import Icon from '../../atoms/icon';

export default class Loading extends Component {
  render() {
    const { isExtension, loggedIn } = this.props;
    let TemplateComponent = Page;

    if (isExtension) {
      TemplateComponent = Extension;
    }
    if (isExtension && !loggedIn) {
      TemplateComponent = Fullscreen;
    }

    return (
      <TemplateComponent>
        <Section>
          <Icon icon="spinner" className="loading-page__spinner" />
        </Section>
      </TemplateComponent>
    );
  }
}
