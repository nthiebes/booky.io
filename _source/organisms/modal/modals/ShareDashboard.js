import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import Base from '../Base';
import { H3 } from '../../../atoms/headline';
import P from '../../../atoms/paragraph';
import Radio from '../../../atoms/radio';
import Input from '../../../atoms/input';
import { ButtonSmallPrimary, ButtonSmallDark } from '../../../atoms/button';
import { ErrorMessage } from '../../../atoms/messages';

class EditDashboard extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    intl: PropTypes.object.isRequired,
    shareDashboard: PropTypes.func.isRequired,
    darkMode: PropTypes.bool
  };

  state = {
    copied: false,
    isPublic: this.props.data.public,
    error: null
  };

  copy = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/shared/${this.props.data.id}`
    );

    this.setState({
      copied: true
    });
  };

  onPublicChange = () => {
    const { data, shareDashboard } = this.props;
    const newPublicValue = !this.state.isPublic;

    this.setState({
      isPublic: newPublicValue,
      copied: false
    });

    shareDashboard({
      id: data.id,
      isPublic: newPublicValue,
      onError: (error) => {
        this.setState({
          error
        });
      }
    });
  };

  render() {
    const { intl, data, ...props } = this.props;
    const { isPublic, copied, error } = this.state;

    return (
      <Base
        headline={intl.formatMessage(
          { id: 'button.share' },
          {
            b: (msg) => msg
          }
        )}
        noCancel
        {...props}
      >
        <P>
          <FormattedMessage
            id="modal.shareText"
            values={{ name: <b>{data.name}</b> }}
          />
        </P>
        <H3>
          <FormattedMessage id="modal.shareVisibility" />
        </H3>
        <Radio
          id="collection-private"
          name="public"
          onChange={this.onPublicChange}
          value="private"
          checked={!isPublic}
          first
        >
          <span>
            <b>
              <FormattedMessage id="modal.sharePrivate" />
            </b>
            <br />
            <FormattedMessage id="modal.sharePrivateText" />
          </span>
        </Radio>
        <Radio
          id="collection-public"
          name="public"
          onChange={this.onPublicChange}
          value="public"
          checked={isPublic}
        >
          <span>
            <b>
              <FormattedMessage id="modal.sharePublic" />
            </b>
            <br />
            <FormattedMessage id="modal.sharePublicText" />
          </span>
        </Radio>
        {isPublic && (
          <div className="modal__share-input-wrapper">
            <Input
              onChange={() => null}
              validation={false}
              value={`${window.location.origin}/shared/${data.id}`}
              className="modal__share-input"
            />
            {copied ? (
              <ButtonSmallDark
                icon="check"
                disabled
                className="modal__share-button"
              >
                <b>
                  <FormattedMessage id="misc.copied" />
                </b>
              </ButtonSmallDark>
            ) : (
              <ButtonSmallPrimary
                icon="copy"
                onClick={this.copy}
                className="modal__share-button"
              >
                <FormattedMessage
                  id="modal.shareLinkButton"
                  values={{ b: (msg) => <b>{msg}</b> }}
                />
              </ButtonSmallPrimary>
            )}
          </div>
        )}
        {error && <ErrorMessage message={error} hasIcon />}
      </Base>
    );
  }
}

export default injectIntl(EditDashboard);
