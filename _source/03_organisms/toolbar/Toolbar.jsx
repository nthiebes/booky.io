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
    // constructor(props) {
    //     super(props);

        // this.onPageScroll = this.onPageScroll.bind(this);
        // this.scrollActions = {
        //     'sticky': {
        //         'active': false,
        //         'action': function(sticky) {
        //             this.props.updateSticky(sticky);
        //         }
        //     }
        // };
    // }

    componentDidMount() {
        
        scrolling.addAction('toolbar', {
            'offset': 85,
            'isAbove': function() {
                console.log(this);
                console.log('isAbove');
            },
            'isBelow': function() {
                console.log('isBelow');
            }
        });
    }

    componentDidUpdate() {
        // this.onPageScroll();
    }

    componentWillUnmount() {
        scrolling.removeAction('toolbar');
    }

    // onPageScroll() {
    //     const HEADER_SCROLL_OFFSET = 85, // needs to be a dynamic height
    //         PROPS = this.props, 
    //         TOP = PROPS.window.pageYOffset || PROPS.document.documentElement.scrollTop;

    //     if (TOP >= HEADER_SCROLL_OFFSET) {
    //         if (!this.scrollActions.sticky.active) {
    //             this.scrollActions.sticky.active = true;
    //             this.scrollActions.sticky.action.call(this, true);
    //         }
    //     } else if (this.scrollActions.sticky.active && !PROPS.headerSticky) {
    //         this.scrollActions.sticky.active = false;
    //         this.scrollActions.sticky.action.call(this, false);
    //     }
    // }

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
