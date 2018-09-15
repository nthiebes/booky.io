import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Section extends Component {
  render() {
    const { className, color, children, fullWidth, compact } = this.props;

    return (
      <section className={ classNames(
        'section',
        color && `section--${color}`,
        fullWidth && 'section--full-width',
        compact && 'section--compact'
      ) }>
        <div className={ classNames('section__content', className && className) }>
          { children }
        </div>
      </section>
    );
  }
}

Section.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  fullWidth: PropTypes.bool,
  compact: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ])
};

/*
        <div className="section__wrapper">
          <div>
            { headline && (
              <H2>
                <FormattedMessage id={ headline } />
              </H2>
            )}
            { paragraph && (
              <P>
                <FormattedMessage id={ paragraph } />
              </P>
            )}
          </div>
          { image && (
            <img
              className={ classNames('section__image', `section__image--${image.align}`) }
              src={ image.url }
              alt={ image.alt }
            />
          ) }
        </div>
 */
