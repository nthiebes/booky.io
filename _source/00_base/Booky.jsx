import React, { PropTypes, Component } from 'react';

import './booky.scss';

/**
 * React component
 * 
 * @class Booky
 * @classdesc 00_base/booky/Booky
 *
 * @prop {element} Children
 */
export default class Booky extends Component {
    render() {
        return (
            <div>
                { this.props.children }
            </div>
        );
    }
}

Booky.propTypes = {
    'children': PropTypes.element
};
