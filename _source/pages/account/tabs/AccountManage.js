import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

// import P from '../../../atoms/paragraph';
// import { ButtonLargeBlue } from '../../../atoms/button';
import Empty from '../../../molecules/empty';

class AccountManage extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.openModal('DeleteAccount');
  }

  render() {
    // const { intl } = this.props;

    return (
      <Empty illustration="empty">
        <FormattedMessage id="misc.comingSoon" />
      </Empty>
    );
  }
}

AccountManage.propTypes = {
  intl: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired
};

export default injectIntl(AccountManage);

/*
<Fragment>
  <P first>
    <FormattedMessage id="account.deleteText" />
  </P>
  <ButtonLargeBlue icon="delete" contentBefore onClick={ this.handleClick }>
    <FormattedMessage id="account.deleteButton" values={ { b: (msg) => <b>{msg}</b> } } />
  </ButtonLargeBlue>
</Fragment>
*/
