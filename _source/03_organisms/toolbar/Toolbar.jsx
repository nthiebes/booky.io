import React from 'react';

import Search from '../../02_molecules/search/Search.jsx';
import Icon from '../../01_atoms/icon/Icon.jsx';
import Button from '../../01_atoms/button/Button.jsx';

export default class Toolbar extends React.Component {
    constructor() {
        super();
    }

    render() {
        const PROPS = this.props;
        const SEARCH_CLASS = PROPS.searchOpen ? 'm-search--open' : '';
        const TOOLBAR_CLASS = PROPS.searchOpen ? 'o-toolbar o-toolbar--open' : 'o-toolbar';

        return (
            <div className={ TOOLBAR_CLASS }>
                <Button className="o-toolbar__button a-button--primary" text="New " buzzword="category" />
                <Search className={ SEARCH_CLASS } open={ PROPS.searchOpen } />
                <Icon icon="search" className="o-toolbar__icon a-icon--dark" onClick={ PROPS.onSearchClick } />
            </div>
        );
    }
}