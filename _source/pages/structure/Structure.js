import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Page from '../../templates/page';
import { H3 } from '../../atoms/headline';
import { ButtonSmallPrimary } from '../../atoms/button';
import StructureComponent from '../../organisms/structure';

export default class Structure extends Component {
  render() {
    return (
      <Page>
        <ButtonSmallPrimary className="structure__button" href="/">
          { 'Done' }
        </ButtonSmallPrimary>
        <H3 className="structure__headline">
          { 'Edit site structure' }
        </H3>
        <StructureComponent />
      </Page>
    );
  }
}

Structure.propTypes = {
  router: PropTypes.object.isRequired
};
