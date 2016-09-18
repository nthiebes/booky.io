import React from 'react';

import Header from '../../03_organisms/header/Header.jsx';
import CategoriesContainer from '../../03_organisms/categories/CategoriesContainer';
import './booky.scss';

export default class Booky extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Header />
                <CategoriesContainer />
            </div>
        );
    }
}