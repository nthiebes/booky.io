import React from 'react';

import Icon from '../../01_atoms/icon/Icon.jsx';

export default class Input extends React.Component {
    constructor() {
        super();
    }

    render() {
        const PROPS = this.props;
        const INPUT_PROPS = {
            className: 'a-input__field',
            placeholder: PROPS.placeholder
        };

        return (
            <div className="a-input">
                <input {...INPUT_PROPS} />
            </div>
        );
    }
}