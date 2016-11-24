import React, { PropTypes, Component } from 'react';
import { scrolling } from '../../00_base/utils/Scrolling';

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
 *
 * @prop {boolean}  [currentlySticky] Fixed toolbar currently enabled/disabled
 * @prop {boolean}  [headerSticky]    Fixed header enabled/disabled
 * @prop {boolean}  [searchFocused]   Search input field focused
 * @prop {boolean}  [sticky]          Fixed toolbar enabled/disabled
 * @prop {boolean}  editMode          Edit mode enabled/disabled
 * @prop {boolean}  searchOpen        Search bar open and visible
 * @prop {function} onEditModeClick   Edit mode callback
 * @prop {function} onSearchClick     Icon click callback
 * @prop {function} updateSticky      Callback for updating the sticky state
 */
export default class Toolbar extends Component {
    constructor(props) {
        super(props);

        this.isAboveActions = this.isAboveActions.bind(this);
        this.isBelowActions = this.isBelowActions.bind(this);
    }

    componentDidMount() {
        scrolling.addAction('toolbar', {
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

    componentWillUpdate() {
        console.log('--------------- update ---------------');
        scrolling.updateStatus('toolbar');
    }

    componentDidUpdate() {
        console.log('--------------- ------ ---------------');
        // scrolling.updateStatus('toolbar');
        // this.onPageScroll();
    }

    componentWillUnmount() {
        scrolling.removeAction('toolbar');
    }

    isAboveActions() {
        console.log('isAbove');
        if (this.props.sticky && !this.props.headerSticky) {
            console.log('update sticky to false');
            this.props.updateSticky(false);
        } else if (this.props.sticky && this.props.headerSticky) {
            console.log('update sticky to true');
            this.props.updateSticky(true);
        }
    }

    isBelowActions() {
        console.log('isBelow');
        if (this.props.sticky && !this.props.headerSticky) {
            console.log('update sticky to true');
            this.props.updateSticky(true);
        }
    }

    getStickyClass(PROPS) {
        if (PROPS.sticky && PROPS.headerSticky && PROPS.currentlySticky) {
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

        // console.log( 'sticky', PROPS.sticky );
        // console.log( 'headerSticky', PROPS.headerSticky );
        console.log( 'currentlySticky', PROPS.currentlySticky );
        console.log('STICKY_CLASS', STICKY_CLASS);

        return (
            <div className={ TOOLBAR_CLASS }>
                <Icon icon={ EDIT_MODE_ICON } className="o-toolbar__icon a-icon--dark" title={ EDIT_MODE_TITLE } onClick={ PROPS.onEditModeClick } />
                <Icon icon="add-category" className="o-toolbar__icon o-toolbar__icon--add-category a-icon--dark" title="New category" />
                <Button className="o-toolbar__button a-button--primary" size="small" color="primary" text="New" buzzword="Category" />
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
    'updateSticky': PropTypes.func.isRequired,
    'headerSticky': PropTypes.bool,
    'currentlySticky': PropTypes.bool,
    'sticky': PropTypes.bool
};

Toolbar.defaultProps = {
    'headerSticky': true,
    'currentlySticky': true,
    'sticky': true
};
