import React from 'react';

import HeaderContainer from '../../03_organisms/header/headerContainer';
import ToolbarContainer from '../../03_organisms/toolbar/toolbarContainer';
import CategoriesContainer from '../../03_organisms/categories/categoriesContainer';
import './booky.scss';

/**
 * booky.io base class
 * 
 * @class 00_base/booky/Booky
 * 
 * @requires 03_organisms/header/headerContainer
 * @requires 03_organisms/toolbar/toolbarContainer
 * @requires 03_organisms/categories/categoriesContainer
 */
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