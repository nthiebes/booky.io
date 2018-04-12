import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import StructureComponent from '../../organisms/structure';

export default class Structure extends Component {
  render() {
    return (
      <Page>
        <H1 className="structure__headline">
          <FormattedMessage id="structure.title" />
        </H1>
        <StructureComponent />
      </Page>
    );
  }
}

Structure.propTypes = {
  router: PropTypes.object.isRequired
};
