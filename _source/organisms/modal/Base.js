import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage, injectIntl } from 'react-intl';

import Icon from '../../atoms/icon';
import { ButtonLargePrimary, ButtonLargeLight } from '../../atoms/button';
import { H3 } from '../../atoms/headline';

class Modal extends Component {
  render() {
    const { children, onClose, headline, noPadding, noCancel, onSave, valid, intl } = this.props;

    return (
      <div className="modal__inner" onClick={ (e) => { e.stopPropagation(); } }>
        <header className="modal__header">
          { headline && <H3 className="modal__headline">{ headline }</H3> }
          <Icon icon="close" onClick={ onClose } title={ intl.formatMessage({ id: 'modal.close' }) } />
        </header>
        <div className={ classNames(['modal__content', !noPadding && 'modal__content--padding']) }>
          { children }
        </div>
        <footer className="modal__footer">
          { !noCancel && (
            <ButtonLargeLight className="modal__button modal__button--cancel" icon="close" onClick={ onClose }>
              <FormattedMessage id="button.cancel" />
            </ButtonLargeLight>
          ) }
          <ButtonLargePrimary disabled={ !valid } className="modal__button" icon="save" onClick={ onSave }>
            <FormattedMessage id="button.confirm" />
          </ButtonLargePrimary>
        </footer>
      </div>
    );
  }
}

export default injectIntl(Modal);

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  headline: PropTypes.string,
  noPadding: PropTypes.bool,
  noCancel: PropTypes.bool,
  valid: PropTypes.bool,
  intl: PropTypes.object.isRequired
};

Modal.defaultProps = {
  toolbar: false,
  className: '',
  noPadding: false,
  noCancel: false,
  valid: true
};
