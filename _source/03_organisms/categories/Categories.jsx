import React from 'react';

import Category from '../../02_molecules/category/Category.jsx';

export default class Categories extends React.Component {
    constructor() {
        super();
    }

    render() {
        const PROPS = this.props;
        const CATEGORIES = PROPS.categories;

        return (
            <div className="o-categories">
                {CATEGORIES.map(category =>
                    <Category key={category.id} {...category} />
                )}
            </div>
        );
    }
}