import React, { PropTypes, Component } from 'react';

import Search from '../../02_molecules/search/Search.jsx';
import Icon from '../../01_atoms/icon/Icon.jsx';
import Button from '../../01_atoms/button/Button.jsx';

/**
 * React component
 * @class 03_organisms/toolbar/Toolbar
 * 
 * @requires 02_molecules/search/Search
 * @requires 01_atoms/icon/Icon
 * @requires 01_atoms/button/Button
 *
 * @prop {boolean}  searchOpen    Search bar open and visible
 * @prop {function} onSearchClick Icon click callback
 */
export default class Toolbar extends Component {
    render() {
        const PROPS = this.props;
        const STICKY_CLASS = PROPS.sticky ? 'o-toolbar--sticky' : '';
        const SEARCH_CLASS = PROPS.searchOpen ? 'm-search--open' : '';
        const OPEN_CLASS = PROPS.searchOpen ? 'o-toolbar--open' : '';
        const TOOLBAR_CLASS = `o-toolbar ${STICKY_CLASS} ${OPEN_CLASS}`;
        const ICON = PROPS.searchOpen ? 'close' : 'search';

        return (
            <div className={ TOOLBAR_CLASS }>
                <Button className="o-toolbar__button a-button--primary" size="small" color="primary" text="New" buzzword="category" />
                <Search className={ SEARCH_CLASS } open={ PROPS.searchOpen } />
                <Icon icon={ ICON } className="o-toolbar__icon a-icon--dark" onClick={ PROPS.onSearchClick } />
            </div>
        );
    }
}

Toolbar.propTypes = {
    'searchOpen': PropTypes.bool.isRequired,
    'onSearchClick': PropTypes.func.isRequired
};
