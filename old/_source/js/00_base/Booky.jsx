import React from 'react';
// import Header from '../03_organisms/Header.jsx';
import Overview from '../03_organisms/Overview.jsx';
import Settings from '../03_organisms/Settings.jsx';

export default class Booky extends React.Component {
    constructor() {
        super();

        this.state = {
            users: [],
            content: <Overview />
        };

        this.contentMap = {
            'Overview': Overview,
            'Settings': Settings
        };

        this.resolveContent = this.resolveContent.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        // this.serverRequest = APP.ajax.getJSON('http://localhost:3003/api/users', function (response) {
        //     this.setState({
        //         users: JSON.parse(response)
        //     });
        // }.bind(this));
    }

    componentWillUnmount() {
        // this.serverRequest.abort();
    }

    handleClick(target) {
        const CONTENT = this.resolveContent(target);

        this.setState({
            content: React.createElement(CONTENT, {})
        });
    }

    resolveContent(target) {
        return this.contentMap[target];
    }

    render() {
        const CONTENT = this.state.content;
        
        return (
            <div>
                <Header handleClick={ this.handleClick } />
                <main className="o-content">
                    { CONTENT }
                </main>
            </div>
        );
    }
}
