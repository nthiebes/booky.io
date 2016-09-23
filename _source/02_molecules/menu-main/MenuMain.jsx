import React from 'react';

import Link from '../../01_atoms/link/Link.jsx';

export default class MenuMain extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="m-menu-main">
                <Link className="m-menu-main__item a-link--light" href="" text="About" />
                <Link className="m-menu-main__item a-link--light" href="" text="Help" />
                <Link className="m-menu-main__item a-link--light" href="" text="Next" />
            </div>
        );
    }
}