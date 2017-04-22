import React, { PropTypes, Component } from 'react';
import Button from '../../atoms/button';
import Checkbox from '../../atoms/checkbox';
import ColorPicker from '../../molecules/color-picker';
import Dropdown from '../../molecules/dropdown';

/**
 * React component
 *
 * @class Sidebar
 * @classdesc organisms/sidebar/Sidebar
 */
export default class Sidebar extends Component {
  render() {
    const PROPS = this.props;
    const OPEN_CLASS = PROPS.open ? 'o-sidebar--open' : '';
    const SIDEBAR_CLASS = 'o-sidebar ' + OPEN_CLASS;
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
        <Button onButtonClick={ PROPS.onDoneClick } text="Done" />

        <h2 className="o-sidebar__subheading">{ 'Global color scheme' }</h2>
        <ColorPicker activeColor={ PROPS.globalColor } onColorChange={ PROPS.onGlobalColorChange } />

        <h2 className="o-sidebar__subheading">{ 'Header color' }</h2>
        <ColorPicker activeColor={ PROPS.headerColor } onColorChange={ PROPS.onHeaderColorChange } />

        <h2 className="o-sidebar__subheading">{ 'Layout' }</h2>
        <Checkbox label={ 'Sticky header' } checked={ PROPS.stickyHeader } onCheckboxClick={ PROPS.onStickyHeaderClick } />
        <Checkbox label={ 'Sticky toolbar' } checked={ PROPS.stickyToolbar } onCheckboxClick={ PROPS.onStickyToolbarClick } />
        <Checkbox label={ 'Width limitation (two columns)' } checked={ PROPS.maxWidth } onCheckboxClick={ PROPS.onMaxWidthClick } />

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
