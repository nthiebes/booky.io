import React, { Component } from 'react';

import Extension from '../../templates/extension';
import Section from '../../molecules/section';
import CustomizeComponent from '../../organisms/customize';

export default class Customize extends Component {
  render() {
    return (
      <Extension>
        <Section>
          <CustomizeComponent />
        </Section>
      </Extension>
    );
  }
}
