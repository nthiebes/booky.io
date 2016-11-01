import React, { PropTypes, Component } from 'react';

import Button from '../../01_atoms/button/Button.jsx';
import ColorPicker from '../../02_molecules/color-picker/ColorPicker.jsx';

/**
 * React component
 * @class 03_organisms/sidebar/Sidebar
 * 
 * @requires 01_atoms/button/Button
 *
 * @prop {boolean} open Sidebar open/closed
 */
export default class Sidebar extends Component {
    render() {
        const PROPS = this.props;
        const OPEN_CLASS = PROPS.open ? 'o-sidebar--open' : '';
        const SIDEBAR_CLASS = 'o-sidebar ' + OPEN_CLASS;

        return (
            <aside className={ SIDEBAR_CLASS }>
                <h1 className="o-sidebar__heading">{ 'Customize booky' }</h1>
                <Button className="o-sidebar__button" text="Done" />

                <h2 className="o-sidebar__subheading">{ 'Global color scheme' }</h2>
                <ColorPicker defaultColor={ 0 } activeColor={ 0 } />

                <h2 className="o-sidebar__subheading">{ 'Header color' }</h2>
                <ColorPicker defaultColor={ 0 } activeColor={ 0 } />

                <h2 className="o-sidebar__subheading">{ 'Layout' }</h2>

                <h2 className="o-sidebar__subheading">{ 'Dashboards' }</h2>

                <h2 className="o-sidebar__subheading">{ 'Preferences' }</h2>
            </aside>
        );
    }
}

Sidebar.propTypes = {
    'open': PropTypes.bool.isRequired
};
