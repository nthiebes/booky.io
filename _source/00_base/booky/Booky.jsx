import React from 'react';

import HeaderContainer from '../../03_organisms/header/HeaderContainer';
import ToolbarContainer from '../../03_organisms/toolbar/ToolbarContainer';
import CategoriesContainer from '../../03_organisms/categories/CategoriesContainer';
import './booky.scss';

export default class Booky extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <HeaderContainer />
                <ToolbarContainer />
                <CategoriesContainer />
            </div>
        );
    }
}