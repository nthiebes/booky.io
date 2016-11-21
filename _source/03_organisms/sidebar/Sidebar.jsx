import React, { PropTypes, Component } from 'react';

import Button from '../../01_atoms/button/Button.jsx';
import Checkbox from '../../01_atoms/checkbox/Checkbox.jsx';
import ColorPicker from '../../02_molecules/color-picker/ColorPicker.jsx';
import Dropdown from '../../02_molecules/dropdown/Dropdown.jsx';

/**
 * React component
 *
 * @class Sidebar
 * @classdesc 03_organisms/sidebar/Sidebar
 * 
 * @requires 01_atoms/button/Button
 * @requires 01_atoms/checkbox/Checkbox
 * @requires 02_molecules/color-picker/ColorPicker
 * @requires 02_molecules/dropdown/Dropdown
 *
 * @prop {boolean}  autofill             Autofill enabled/disabled
 * @prop {boolean}  maxWidth             Maximum content width enabled/disabled
 * @prop {boolean}  newtab               New tab enabled/disabled
 * @prop {boolean}  notes                Notes enabled/disabled
 * @prop {boolean}  open                 Sidebar open/closed
 * @prop {boolean}  stickyHeader         Sticky header enabled/disabled
 * @prop {boolean}  stickyToolbar        Sticky toolbar enabled/disabled
 * @prop {function} onAutofillClick      Autofill click callback
 * @prop {function} onDashboardChange    Dashboard change callback
 * @prop {function} onDoneClick          Done button click callback
 * @prop {function} onGlobalColorChange  Global color change callback
 * @prop {function} onHeaderColorChange  Header color change callback
 * @prop {function} onMaxWidthClick      Maximum content width callback
 * @prop {function} onNewtabClick        New tab click callback
 * @prop {function} onNotesClick         Notes click callback
 * @prop {function} onStickyHeaderClick  Sticky header click callback
 * @prop {function} onStickyToolbarClick Sticky toolbar click callback
 * @prop {number}   dashboard            Dashboard type
 * @prop {number}   globalColor          Global color key
 * @prop {number}   headerColor          Header color key
 */
export default class Sidebar extends Component {
    render() {
        const PROPS = this.props;
        const OPEN_CLASS = PROPS.open ? 'o-sidebar--open' : '';
        const STICKY_CLASS = PROPS.stickyHeader ? '' : ' o-sidebar--no-offset';
        const SIDEBAR_CLASS = 'o-sidebar ' + OPEN_CLASS + STICKY_CLASS;
        const DASHBOARD_OPTIONS = [
            {
                'name': 'Display as dropdown'
            }, {
                'name': 'Display as sidebar'
            }
        ];

        return (
            <aside className={ SIDEBAR_CLASS }>
                <h1 className="o-sidebar__heading">{ 'Customize booky' }</h1>
                <Button onButtonClick={ PROPS.onDoneClick } className="o-sidebar__button" text="Done" />

                <h2 className="o-sidebar__subheading">{ 'Global color scheme' }</h2>
                <ColorPicker activeColor={ PROPS.globalColor } onColorChange={ PROPS.onGlobalColorChange } />

                <h2 className="o-sidebar__subheading">{ 'Header color' }</h2>
                <ColorPicker activeColor={ PROPS.headerColor } onColorChange={ PROPS.onHeaderColorChange } />

                <h2 className="o-sidebar__subheading">{ 'Layout' }</h2>
                <Checkbox label={ 'Sticky header' } checked={ PROPS.stickyHeader } onCheckboxClick={ PROPS.onStickyHeaderClick } />
                <Checkbox label={ 'Sticky toolbar' } checked={ PROPS.stickyToolbar } onCheckboxClick={ PROPS.onStickyToolbarClick } />
                <Checkbox label={ 'Maximum width (two columns)' } checked={ PROPS.maxWidth } onCheckboxClick={ PROPS.onMaxWidthClick } />

                <h2 className="o-sidebar__subheading">{ 'Dashboards' }</h2>
                <Dropdown onDropdownChange={ PROPS.onDashboardChange } options={ DASHBOARD_OPTIONS } selectedKey={ PROPS.dashboard } />
                <p className="o-sidebar__note">{ '(smaller screens will always use a sidebar)' }</p>

                <h2 className="o-sidebar__subheading">{ 'Preferences' }</h2>
                <Checkbox label={ 'Bookmark notes' } checked={ PROPS.notes } onCheckboxClick={ PROPS.onNotesClick } />
                <Checkbox label={ 'Autofill bookmark name' } checked={ PROPS.autofill } onCheckboxClick={ PROPS.onAutofillClick } />
                <Checkbox label={ 'Open bookmarks in new tab' } checked={ PROPS.newtab } onCheckboxClick={ PROPS.onNewtabClick } />
            </aside>
        );
    }
}

Sidebar.propTypes = {
    'open': PropTypes.bool.isRequired,
    'notes': PropTypes.bool.isRequired,
    'autofill': PropTypes.bool.isRequired,
    'newtab': PropTypes.bool.isRequired,
    'globalColor': PropTypes.number.isRequired,
    'headerColor': PropTypes.number.isRequired,
    'stickyHeader': PropTypes.bool.isRequired,
    'stickyToolbar': PropTypes.bool.isRequired,
    'maxWidth': PropTypes.bool.isRequired,
    'dashboard': PropTypes.number.isRequired,
    'onStickyHeaderClick': PropTypes.func.isRequired,
    'onStickyToolbarClick': PropTypes.func.isRequired,
    'onNotesClick': PropTypes.func.isRequired,
    'onAutofillClick': PropTypes.func.isRequired,
    'onNewtabClick': PropTypes.func.isRequired,
    'onGlobalColorChange': PropTypes.func.isRequired,
    'onHeaderColorChange': PropTypes.func.isRequired,
    'onDoneClick': PropTypes.func.isRequired,
    'onMaxWidthClick': PropTypes.func.isRequired,
    'onDashboardChange': PropTypes.func.isRequired
};
