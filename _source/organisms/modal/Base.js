import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../../atoms/icon';
import { ButtonLargePrimary, ButtonLargeLight } from '../../atoms/button';
import { H3 } from '../../atoms/headline';

export default class Modal extends Component {
  render() {
    const { children, onClose, headline, noPadding, noCancel, onSave } = this.props;

    return (
      <div className="modal__inner" onClick={ (e) => { e.stopPropagation(); } }>
        <header className="modal__header">
          { headline && <H3 className="modal__headline">{ headline }</H3> }
          <Icon icon="close" onClick={ onClose } />
        </header>
        <div className={ classNames(['modal__content', !noPadding && 'modal__content--padding']) }>
          { children }
        </div>
        <footer className="modal__footer">
          { !noCancel && <ButtonLargeLight className="modal__button modal__button--cancel" onClick={ onClose }>{ 'Cancel' }</ButtonLargeLight> }
          <ButtonLargePrimary className="modal__button" onClick={ onSave }>{ 'Done' }</ButtonLargePrimary>
        </footer>
      </div>
    );
  }
}

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
  noCancel: PropTypes.bool
};

Modal.defaultProps = {
  toolbar: false,
  className: '',
  noPadding: false,
  noCancel: false
};
