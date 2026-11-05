import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';

import { ButtonLargeBlue } from '../../../atoms/button';
import P from '../../../atoms/paragraph';
import Duplicates from '../../../organisms/duplicates';

export default class AccountTools extends PureComponent {
  componentWillUnmount() {
    this.props.resetDuplicates();
  }

  render() {
    const { isPremium, pending, showResults, findDuplicates } = this.props;

    return (
      <>
        <P first>
          <FormattedMessage
            id="account.findDuplicatesText"
            values={{ b: (msg) => <b>{msg}</b> }}
          />
        </P>
        {isPremium ? (
          <>
            <ButtonLargeBlue
              icon="search"
              autoWidth
              pending={pending}
              disabled={pending}
              onClick={findDuplicates}
            >
              <FormattedMessage
                id="account.findDuplicatesButton"
                values={{ b: (msg) => <b>{msg}</b> }}
              />
            </ButtonLargeBlue>
            {showResults && <Duplicates />}
          </>
        ) : (
          <>
            <P>
              <FormattedMessage id="account.findDuplicatesSupporter" />
            </P>
            <ButtonLargeBlue to="/upsell" icon="membership" autoWidth>
              <FormattedMessage
                id="button.supporter"
                values={{ b: (msg) => <b>{msg}</b> }}
              />
            </ButtonLargeBlue>
          </>
        )}
      </>
    );
  }
}
