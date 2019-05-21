import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import { ButtonSmallPrimary } from '../../atoms/button';
import Label from '../../atoms/label';
import Select from '../../atoms/select';
import Input from '../../atoms/input';
import Checkbox from '../../atoms/checkbox';
// import { H1 } from '../../atoms/headline';
// import P from '../../atoms/paragraph';
import ExtensionPage from '../../templates/extension';
import Section from '../../molecules/section';

class Add extends Component {
  constructor(props) {
    super(props);

    this.toggleLocation = this.toggleLocation.bind(this);
    this.toggleData = this.toggleData.bind(this);

    this.state = {
      locationOpen: true,
      dataOpen: true
    };
  }

  toggleLocation() {
    this.setState({
      locationOpen: !this.state.locationOpen
    });
  }

  toggleData() {
    this.setState({
      dataOpen: !this.state.dataOpen
    });
  }

  render() {
    const { intl, title, url, description, favicon } = this.props;
    const { locationOpen, dataOpen } = this.state;

    return (
      <ExtensionPage>
        <Section>
          <ButtonSmallPrimary className="add__add-button">
            { 'Diese Seite hinzufügen' }
          </ButtonSmallPrimary>
          <hr className="add__hr" />
          <Checkbox
            checked={ locationOpen }
            id="choose-location"
            label="Sammlung/Kategorie auswählen"
            onChange={ this.toggleLocation }
          />
          { locationOpen && (
            <Fragment>
              <Label htmlFor="collection" className="add__label">
                { 'Sammlung' }
              </Label>
              <Select id="collection" options={ [{ text: 'Banana', value: 'banana' }] } />
              <Label htmlFor="category">
                { 'Kategorie' }
              </Label>
              <Select id="category" options={ [{ text: 'Banana', value: 'banana' }] } />
            </Fragment>
          ) }
          <hr className="add__hr" />
          <Checkbox
            checked={ dataOpen }
            id="edit-data"
            label="Webseitendaten bearbeiten"
            onChange={ this.toggleData }
          />
          { dataOpen && (
            <Fragment>
              <Label htmlFor="title" className="add__label">
                { 'Name' }
              </Label>
              <Input id="title" value={ title } />
              <Label htmlFor="url">
                { 'Url' }
              </Label>
              <Input id="url" value={ url } />
            </Fragment>
          ) }
        </Section>
      </ExtensionPage>
    );
  }
}

Add.propTypes = {
  intl: PropTypes.object.isRequired,
  title: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  favicon: PropTypes.string
};

export default injectIntl(Add);
