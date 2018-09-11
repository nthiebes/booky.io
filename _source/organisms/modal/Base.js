import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage, injectIntl } from 'react-intl';

import Icon from '../../atoms/icon';
import { ButtonLargeBlue, ButtonLargeLight } from '../../atoms/button';
import { H3 } from '../../atoms/headline';
import Form from '../../molecules/form';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  onCancel() {
    this.props.onClose();
  }

  onSubmit(data) {
    this.props.onSave(data);
  }

  render() {
    const { children, onClose, headline, noPadding, noCancel, intl, pending } = this.props;

    return (
      <Form className="modal__inner" onSubmit={ this.onSubmit } onClick={ (e) => { e.stopPropagation(); } }>
        <header className="modal__header">
          { headline && <H3 className="modal__headline">{ headline }</H3> }
          <Icon icon="close" onClick={ onClose } title={ intl.formatMessage({ id: 'modal.close' }) } />
        </header>
        <div className={ classNames(['modal__content', !noPadding && 'modal__content--padding']) }>
          { children }
        </div>
        <footer className="modal__footer">
          { !noCancel && (
            <ButtonLargeLight className="modal__button modal__button--cancel" icon="close" onClick={ this.onCancel } type="button">
              <FormattedMessage id="button.cancel" />
            </ButtonLargeLight>
          ) }
          <ButtonLargeBlue pending={ pending } disabled={ pending } className="modal__button" icon="save" type="submit">
            <FormattedMessage id="button.confirm" />
          </ButtonLargeBlue>
        </footer>
      </Form>
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
  intl: PropTypes.object.isRequired,
  pending: PropTypes.bool.isRequired
};

Modal.defaultProps = {
  toolbar: false,
  className: '',
  noPadding: false,
  noCancel: false,
  valid: true
};
