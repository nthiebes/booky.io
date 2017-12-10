import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../../atoms/icon';
import { ButtonLargePrimary } from '../../atoms/button';
import { H3 } from '../../atoms/headline';

export default class Modal extends Component {
  render() {
    const { children, open, onClose, headline } = this.props;

    return (
      <div className={ classNames(['modal', open && 'modal--open']) }>
        <div className="modal__inner">
          <header className="modal__header">
            { headline && <H3 className="modal__headline">{ headline }</H3> }
            <Icon icon="close" onClick={ onClose } />
          </header>
          <div className="modal__content">
            { children }
          </div>
          <footer className="modal__footer">
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
  headline: PropTypes.string
};

Modal.defaultProps = {
  toolbar: false,
  className: ''
};
