import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import classNames from 'classnames';

import Icon from '../../atoms/icon';
import { ButtonLargeBlue, ButtonLargeLight } from '../../atoms/button';
import { ErrorMessage } from '../../atoms/messages';
import { H2 } from '../../atoms/headline';
import Form from '../../molecules/form';

class Modal extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.element,
      PropTypes.string
    ]).isRequired,
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    headline: PropTypes.string,
    noCancel: PropTypes.bool,
    intl: PropTypes.object.isRequired,
    pending: PropTypes.bool.isRequired,
    darkMode: PropTypes.bool.isRequired,
    error: PropTypes.string
  }

  componentDidMount() {
    this.anchor.focus();

    // document.body.classList.add('booky--no-scrolling');
  }

  onSubmit = (data) => {
    this.props.onSave(data);
  }

  render() {
    const { children, onClose, headline, noCancel, intl, pending, error } = this.props;

    return (
      <Form onSubmit={ this.onSubmit }>
        <header className="modal__header">
          { /* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */ }
          <span tabIndex="0" className="modal__tab-index-link" ref={ (anchor) => { this.anchor = anchor; } }>
            <FormattedMessage id="modal.tabAnchor" />
          </span>
          { headline && <H2 className="modal__headline">{ headline }</H2> }
          <Icon
            isButton
            icon="close"
            onClick={ onClose }
            label={ intl.formatMessage({ id: 'modal.close' }) }
          />
        </header>
        <div className="modal__content">
          { children }
        </div>
        { error && <ErrorMessage message={ error } hasIcon className="modal__error" /> }
        <footer className={ classNames('modal__footer', noCancel && 'modal__footer--one-button') }>
          { !noCancel && (
            <ButtonLargeLight
              className="modal__button modal__button--cancel"
              icon="close"
              onClick={ onClose }
              type="button"
            >
              <FormattedMessage id="button.cancel" />
            </ButtonLargeLight>
          ) }
          <ButtonLargeBlue
            pending={ pending }
            disabled={ pending }
            className="modal__button"
            icon={ noCancel ? 'close' : 'save' }
            type="submit"
          >
            <FormattedMessage id={ noCancel ? 'button.close' : 'button.confirm' } />
          </ButtonLargeBlue>
        </footer>
      </Form>
    );
  }
}

export default injectIntl(Modal);
