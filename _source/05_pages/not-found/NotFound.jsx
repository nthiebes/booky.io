import React, { Component } from 'react';

import Page from '../../04_templates/page';

/**
 * React component
 * 
 * @class NotFound
 * @classdesc 05_pages/not-found/NotFound
 */
export default class NotFound extends Component {
    render() {
        return (
            <Page>
                { '404: Page not found' }
            </Page>
        );
    }
}
