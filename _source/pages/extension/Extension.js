import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

// import { H1 } from '../../atoms/headline';
// import P from '../../atoms/paragraph';
import Section from '../../molecules/section';

class Extension extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { intl } = this.props;
    // const { username, email, message, pending, error, success } = this.state;

    return (
      <Section>
        { 'banana' }
      </Section>
    );
  }
}

Extension.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectIntl(Extension);
