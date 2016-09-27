import React from 'react';

import Search from '../../02_molecules/search/Search.jsx';
import Icon from '../../01_atoms/icon/Icon.jsx';
import Button from '../../01_atoms/button/Button.jsx';

export default class Toolbar extends React.Component {
    constructor() {
        super();

        this.onMainMenuClick = this.onMainMenuClick.bind(this);
    }

    onMainMenuClick() {
        console.log(this);
    }

    render() {
        const PROPS = this.props;

        return (
            <div className="o-toolbar">
                <Button className="o-toolbar__button a-button--primary" text="New " buzzword="category" />
                <Search />
            </div>
        );
    }
}