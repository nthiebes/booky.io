import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import classNames from 'classnames';

import Icon from '../../atoms/icon';
import { ButtonLargeBlue, ButtonLargeLight } from '../../atoms/button';
import { H3 } from '../../atoms/headline';
import Form from '../../molecules/form';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.hasAnchor && this.anchor.focus();

    // document.body.classList.add('booky--no-scrolling');
  }

  onSubmit(data) {
    this.props.onSave(data);
  }

  handleClick(event) {
    event.stopPropagation();
  }

  render() {
    const { children, onClose, headline, noCancel, intl, pending, hasAnchor } = this.props;

    return (
      <Form onSubmit={ this.onSubmit } onClick={ this.handleClick }>
        <header className="modal__header">
          { hasAnchor && (
            <a
              tabIndex="0"
              title={ this.props.intl.formatMessage({ id: 'modal.tabAnchor' }) }
              className="modal__tab-index-link"
              ref={ (anchor) => { this.anchor = anchor; } }
            />
          ) }
          { headline && <H3 className="modal__headline">{ headline }</H3> }
          <Icon icon="close" onClick={ onClose } title={ intl.formatMessage({ id: 'modal.close' }) } tabIndex="0" />
        </header>
        <div className="modal__content">
          { children }
        </div>
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

Modal.propTypes = {
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
  hasAnchor: PropTypes.bool,
  darkMode: PropTypes.bool.isRequired
};
