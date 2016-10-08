import React from 'react';

import Bookmark from '../bookmark/Bookmark.jsx';

/**
 * @class 02_molecules/category/Category
 */
export default class Category extends React.Component {
    render() {
        const PROPS = this.props;

        return (
            <section className="m-category">
                <div className="m-category__icon a-icon a-icon--reduce" />
                <h1 className="m-category__name">{ PROPS.name }</h1>
                <div className="m-category__icon a-icon a-icon--move" />
                <div className="m-category__icon a-icon a-icon--edit" />
                <div className="m-category__icon a-icon a-icon--delete" />
                <ul className="m-category__bookmarks">
                    <Bookmark title="Bookmark 1" url="https://booky.io" />
                    <Bookmark title="Bookmark 2" url="https://booky.io" />
                    <Bookmark title="Bookmark 3" url="https://booky.io" />
                </ul>
            </section>
        );
    }
}
