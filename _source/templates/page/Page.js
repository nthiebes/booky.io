import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Header from '../../organisms/header';
import Sidebar from '../../organisms/sidebar';
import Footer from '../../organisms/footer';
import Modal from '../../organisms/modal';
import Toolbar from '../../organisms/toolbar';

export default class Page extends Component {
  constructor(props) {
    super(props);

    this.show = this.show.bind(this);
    this.state = {
      show: false
    };
  }

  componentDidMount() {
    window.setTimeout(this.show, 100);
  }

  show() {
    this.setState({
      show: true
    });
  }

  render() {
    const { children, className, dashboards, home, toolbar, blurContent, headerSticky, darkMode } = this.props;
    const { show } = this.state;

    return (
      <Fragment>
        <Header
          className={ classNames(
            blurContent && 'page--blur',
            'page--hidden',
            show && 'page--show'
          ) }
          home={ home }
        />
        { toolbar && (
          <Toolbar className={ classNames(
            blurContent && 'page--blur',
            'page--hidden',
            show && 'page--show'
          ) } />
        ) }
        <Sidebar
          className={ classNames(
            blurContent && 'page--blur',
            'page--hidden',
            show && 'page--show'
          ) }
          dashboards={ dashboards }
        />
        <main className={ classNames(
          'page',
          'page--hidden',
          show && 'page--show',
          headerSticky && 'page--sticky-header',
          darkMode && 'page--dark',
          className && className
        ) }>
          { children }
        </main>
        <Footer
          className={ classNames(
            blurContent && 'page--blur',
            'page--hidden',
            show && 'page--show'
          ) }
          home={ home }
        />
        <Modal />
      </Fragment>
    );
  }
}

Page.propTypes = {
  toolbar: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  className: PropTypes.string,
  dashboards: PropTypes.bool,
  home: PropTypes.bool,
  blurContent: PropTypes.bool,
  headerSticky: PropTypes.bool.isRequired,
  darkMode: PropTypes.bool.isRequired
};
