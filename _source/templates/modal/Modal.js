import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../../atoms/icon';
import { ButtonLargePrimary, ButtonLargeLight } from '../../atoms/button';
import { H3 } from '../../atoms/headline';

export default class Modal extends Component {
  render() {
    const { children, open, onClose, headline, noPadding, noCancel } = this.props;
    const body = document.getElementsByTagName('body')[0];
    const html = document.getElementsByTagName('html')[0];

    if (open) {  
      body.classList.add('booky--no-scrolling');
      html.classList.add('booky--no-scrolling');
    } else {
      body.classList.remove('booky--no-scrolling');
      html.classList.remove('booky--no-scrolling');
    }

    return (
      <div className={ classNames(['modal', open && 'modal--open']) } onClick={ onClose }>
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
            <ButtonLargePrimary className="modal__button" onClick={ onClose }>{ 'Done' }</ButtonLargePrimary>
          </footer>
        </div>
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
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
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
