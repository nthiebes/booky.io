import React, { PropTypes, Component } from 'react';
import Link from '../../atoms/link';
import Icon from '../../atoms/icon';

/**
 * React component
 *
 * @class MenuMain
 * @classdesc molecules/menu-main/MenuMain
 */
export default class MenuMain extends Component {
  constructor(props) {
    super(props);

    this.onMenuClick = this.onMenuClick.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //     nextProps.document.body.classList.toggle('booky--no-scrolling-mobile-tablet', nextProps.menuMainOpen);
  // }

  onMenuClick(event) {
    event.stopPropagation();
  }

  render() {
    const PROPS = this.props;
    const LOGGED_IN = PROPS.loggedIn;
    const MENU_MAIN_OPEN_CLASS = PROPS.menuMainOpen ? 'm-menu-main--open ' : '';
    const CLASS = 'm-menu-main ' + MENU_MAIN_OPEN_CLASS + PROPS.className;

    return (
      <ul className={ CLASS } onClick={ this.onMenuClick }>
        <Link className="m-menu-main__item" href="/about">
          <Icon icon="about" label="About" />
        </Link>
        <Link className="m-menu-main__item" href="/help">
          <Icon icon="help" label="Help" />
        </Link>
        { LOGGED_IN ? <Link className="m-menu-main__item" href="/account">
          <Icon icon="account" label="Account" />
        </Link> : null }
        { LOGGED_IN ? <Link className="m-menu-main__item" href="/next">
          <Icon icon="next" label="Next" />
        </Link> : null }
        { LOGGED_IN ? <Link className="m-menu-main__item m-menu-main__sign-out" href="/sign-out">
          <Icon icon="sign-out" label="Sign Out" />
        </Link> : null }
      </ul>
    );
  }
}

MenuMain.propTypes = {
  'className': PropTypes.string,
  'document': PropTypes.object.isRequired,
  'loggedIn': PropTypes.bool.isRequired,
  'menuMainOpen': PropTypes.bool.isRequired
};

MenuMain.defaultProps = {
  'className': ''
};
