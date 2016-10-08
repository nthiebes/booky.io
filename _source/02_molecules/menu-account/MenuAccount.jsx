import React from 'react';

import Button from '../../01_atoms/button/Button.jsx';

/**
 * @class 02_molecules/menu-account/MenuAccount
 */
export default class MenuAccount extends React.Component {
    render() {
        return (
            <div className="m-menu-account" id="menu-account">
                <Button className="m-menu-account__button a-button--light a-button--icon" icon="profile" />
                <Button className="m-menu-account__button a-button--light a-button--icon" icon="cogs" />
            </div>
        );
    }
}
