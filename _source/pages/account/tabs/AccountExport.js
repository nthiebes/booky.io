import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import { ButtonLargeBlue } from '../../../atoms/button';
import P from '../../../atoms/paragraph';
import Checkbox from '../../../atoms/checkbox';

class AccountExport extends PureComponent {
  static propTypes = {
    intl: PropTypes.object.isRequired
  };

  state = {
    includeFavicon: true
  };

  handleCheckboxChange = ({ checked }) => {
    this.setState({
      includeFavicon: checked
    });
  };

  render() {
    const { intl } = this.props;
    const { includeFavicon } = this.state;
    const downloadLink = `${
      process.env.NODE_ENV === 'development' ? 'http://localhost:8001/' : '/'
    }api/bookmarks/export${includeFavicon ? '' : '?noIcons=1'}`;

    return (
      <>
        <P first>
          <FormattedMessage
            id="account.exportText"
            values={{ b: (msg) => <b>{msg}</b> }}
          />
        </P>
        <Checkbox
          label={intl.formatMessage({ id: 'account.exportFavicons' })}
          id="show-password"
          onChange={this.handleCheckboxChange}
          checked={includeFavicon}
        />
        <ButtonLargeBlue
          icon="download"
          contentBefore
          href={downloadLink}
          target="_blank"
        >
          <FormattedMessage
            id="account.exportButton"
            values={{ b: (msg) => <b>{msg}</b> }}
          />
        </ButtonLargeBlue>
      </>
    );
  }
}

export default injectIntl(AccountExport);
