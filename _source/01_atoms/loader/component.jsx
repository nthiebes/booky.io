import React, { Component } from 'react';

import Icon from '../icon/Icon.jsx';

/**
 * React component
 * 
 * @class Loader
 * @classdesc 01_atoms/loader/Loader
 */
export default class Loader extends Component {
    render() {
        return (
            <div className="a-loader">
                <div className="a-loader__circle" />
                <Icon icon="heart" className={ 'a-loader__icon a-icon--primary' } />
            </div>
        );
    }
}
