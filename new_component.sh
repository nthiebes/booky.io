#!/bin/bash
echo "(a)tom / (m)olecule / (o)rganism:"
read moduleType

if [ $moduleType == "a" ]; then
    modulePath="01_atoms"
elif [ $moduleType == "m" ]; then
    modulePath="02_molecules"
elif [ $moduleType == "o" ]; then
    modulePath="03_organisms"
fi

echo "Redux? (y/n)"
read redux

echo "Folder name:"
read folder
mkdir "_source/$modulePath/$folder"

echo "Component name:"
read name

mkdir "_source/$modulePath/$folder/styles"
styles="@import \"../../00_base/config\";

.$moduleType-$folder {
    
}"
echo "$styles" >> "_source/$modulePath/$folder/styles/$moduleType-$folder.scss"

component="import React, { PropTypes, Component } from 'react';

/**
 * React component
 * @class $modulePath/$folder/${name^}
 *
 * @prop {string} [className] Optional class name
 */
export default class ${name^} extends Component {
    render() {
        const PROPS = this.props;
        const CLASS = '$moduleType-$folder ' + PROPS.className;

        return (
            <div className={ CLASS }>
                
            </div>
        );
    }
}

${name^}.propTypes = {
    'className': PropTypes.string
};

${name^}.defaultProps = {
    'className': ''
};"
echo "$component" >> "_source/$modulePath/$folder/${name^}.jsx"

specs="import React from 'react';
import { shallow } from 'enzyme';

import ${name^} from './${name^}.jsx';

describe('<${name^} />', function() {

    describe('presentational component', function() {

        let component;
        
        const getComponent = function(props = {}) {
            return <${name^} { ...props } />;
        };

        describe('when initialized with optional parameters', function() {

            beforeEach(function() {
                component = shallow(getComponent({
                    'className': 'banana'
                }));
            });

            it('should have the correct class', function() {
                expect(component.find('div').hasClass('$moduleType-$folder banana')).toBe(true);
            });
        });
    });
});"
echo "$specs" >> "_source/$modulePath/$folder/${name,}.spec.jsx"

if [ $redux == "y" ]; then

actions="/**
 * Action types
 */
export const TOGGLE_${name^^} = 'TOGGLE_${name^^}';


/**
 * Action creators
 */
export function toggle${name^}() {
    return {
        'type': TOGGLE_${name^^}
    };
}"
echo "$actions" >> "_source/$modulePath/$folder/${name,}Actions.js"

reducers="import { TOGGLE_${name^^} } from './${name,}Actions';

const ${name,} = (state = {}, action) => {
    switch (action.type) {
        case TOGGLE_${name^^}:
            return Object.assign({}, state, {
                'open': !state.open
            });

        default:
            return state;
    }
};

export default ${name,};"
echo "$reducers" >> "_source/$modulePath/$folder/${name,}Reducers.js"

container="import { connect } from 'react-redux';
import ${name^} from './${name^}.jsx';
import { toggle${name^} } from './${name,}Actions';

export const mapStateToProps = function(state) {
    return {
        'open': state.${name,}.open
    };
};

export const mapDispatchToProps = function(dispatch) {
    return {
        'on${name^}Click': () => {
            dispatch(toggle${name^}());
        }
    };
};

const ${name^}Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(${name^});

export default ${name^}Container;"
echo "$container" >> "_source/$modulePath/$folder/${name,}Container.js"

fi