import React from 'react';

import HeaderContainer from '../../03_organisms/header/HeaderContainer';
import ToolbarContainer from '../../03_organisms/toolbar/ToolbarContainer';
import CategoriesContainer from '../../03_organisms/categories/CategoriesContainer';
import './booky.scss';

/**
 * booky.io base class
 * 
 * @class 00_base/booky/Booky
 * 
 * @requires 03_organisms/header/HeaderContainer
 * @requires 03_organisms/toolbar/ToolbarContainer
 * @requires 03_organisms/categories/CategoriesContainer
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