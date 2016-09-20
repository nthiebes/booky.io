import React from 'react';

export default class MenuMain extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="m-menu-main" id="menu-main">
                <a className="m-menu-main__item a-link a-link--light" href="">About</a>
                <a className="m-menu-main__item a-link a-link--light" href="">Help</a>
            </div>
        );
    }
}