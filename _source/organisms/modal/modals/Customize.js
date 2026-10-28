import React, { Component } from 'react';
import { injectIntl } from 'react-intl';

import Base from '../Base';
import CustomizeComponent from '../../../organisms/customize';

class Customize extends Component {
  render() {
    const { intl, ...props } = this.props;

    return (
      <Base
        headline={intl.formatMessage({ id: 'customize.title' })}
        noCancel
        {...props}
      >
        <CustomizeComponent />
      </Base>
    );
  }
}

export default injectIntl(Customize);

