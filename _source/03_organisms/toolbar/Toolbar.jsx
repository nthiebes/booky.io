import React, { PropTypes, Component } from 'react';
import { scrolling } from '../../00_base/utils/Scrolling';

import DashboardsContainer from '../../03_organisms/dashboards/dashboardsContainer';
import Search from '../../02_molecules/search/Search.jsx';
import Icon from '../../01_atoms/icon/Icon.jsx';
import Button from '../../01_atoms/button/Button.jsx';

/**
 * React component
 *
 * @class Toolbar
 * @classdesc 03_organisms/toolbar/Toolbar
 * 
 * @requires 01_atoms/button/Button
 * @requires 01_atoms/icon/Icon
 * @requires 02_molecules/search/Search
 * @requires 03_organisms/dashboards/dashboardsContainer
 *
 * @prop {boolean}  [currentlySticky]     Fixed toolbar currently enabled/disabled
 * @prop {boolean}  [headerSticky]        Fixed header enabled/disabled
 * @prop {boolean}  [searchFocused]       Search input field focused
 * @prop {boolean}  [sticky]              Fixed toolbar enabled/disabled
 * @prop {boolean}  editMode              Edit mode enabled/disabled
 * @prop {boolean}  searchOpen            Search bar open and visible
 * @prop {function} onEditModeClick       Edit mode callback
 * @prop {function} onSearchClick         Icon click callback
 * @prop {function} updateCurrentlySticky Callback for updating the sticky state
 */
export default class Toolbar extends Component {
    constructor(props) {
        super(props);

        this.nextProps = {};
        this.isAboveActions = this.isAboveActions.bind(this);
        this.isBelowActions = this.isBelowActions.bind(this);
    }

    componentDidMount() {
        scrolling.registerAction('toolbar', {
            'offset': 85,
            'scope': this,
            'isAbove': function() {
                this.isAboveActions();
            },
            'isBelow': function() {
                this.isBelowActions();
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        this.nextProps = nextProps;
        scrolling.updateStatus('toolbar');
    }

    componentWillUnmount() {
        scrolling.removeAction('toolbar');
    }

    isAboveActions() {
        if (this.nextProps.sticky && !this.nextProps.headerSticky) {
            this.props.updateCurrentlySticky(false);
        }
    }

    isBelowActions() {
        if (this.nextProps.sticky && !this.nextProps.headerSticky) {
            this.props.updateCurrentlySticky(true);
        }
    }

    getStickyClass(PROPS) {
        if (PROPS.sticky && PROPS.headerSticky) {
            return 'o-toolbar--sticky';
        }

        if (PROPS.sticky && !PROPS.headerSticky && PROPS.currentlySticky) {
            return 'o-toolbar--sticky-one-and-only';
        }

        return '';
    }

    render() {
        const PROPS = this.props;
        const STICKY_CLASS = this.getStickyClass(PROPS);
        const SEARCH_CLASS = PROPS.searchOpen ? 'm-search--open' : '';
        const OPEN_CLASS = PROPS.searchOpen ? 'o-toolbar--open' : '';
        const TOOLBAR_CLASS = `o-toolbar ${STICKY_CLASS} ${OPEN_CLASS}`;
        const SEARCH_ICON = PROPS.searchOpen ? 'close' : 'search';
        const SEARCH_TITLE = PROPS.searchOpen ? 'Close' : 'Search';
        const EDIT_MODE_ICON = PROPS.editMode ? 'view' : 'edit';
        const EDIT_MODE_TITLE = PROPS.editMode ? 'View mode' : 'Edit mode';

        return (
            <div className={ TOOLBAR_CLASS }>
                <Icon icon={ EDIT_MODE_ICON } className="o-toolbar__icon a-icon--dark" title={ EDIT_MODE_TITLE } onClick={ PROPS.onEditModeClick } />
                <Icon icon="add-category" className="o-toolbar__icon o-toolbar__icon--add-category a-icon--dark" title="New category" />
                <Button className="o-toolbar__button a-button--primary" size="small" color="primary" text="New" buzzword="Category" />
                <DashboardsContainer position={ 0 } />
                <Search className={ SEARCH_CLASS } focus={ PROPS.searchFocused } />
                <Icon 
                    icon={ SEARCH_ICON } 
                    className="o-toolbar__icon o-toolbar__icon--search a-icon--dark" 
                    onClick={ PROPS.onSearchClick } 
                    title={ SEARCH_TITLE } 
                />
            </div>
        );
    }
}

Toolbar.propTypes = {
    'searchOpen': PropTypes.bool.isRequired,
    'searchFocused': PropTypes.bool,
    'editMode': PropTypes.bool.isRequired,
    'onSearchClick': PropTypes.func.isRequired,
    'onEditModeClick': PropTypes.func.isRequired,
    'updateCurrentlySticky': PropTypes.func.isRequired,
    'headerSticky': PropTypes.bool,
    'sticky': PropTypes.bool,
    'currentlySticky': PropTypes.bool
};

Toolbar.defaultProps = {
    'headerSticky': true,
    'sticky': true,
    'currentlySticky': true
};
