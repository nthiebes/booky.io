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

component="import React, { PropTypes, Component } from 'react';

/**
 * React component
 * @class $modulePath/${name,}/${name^}
 *
 * @prop {boolean} prop1 Prop1 description
 */
export default class ${name^} extends Component {
    render() {
        const PROPS = this.props;
        const CLASS = '$moduleType-${name,} ' + PROPS.class;

        return (
            <div className={ CLASS }>
                
            </div>
        );
    }
}

${name^}.propTypes = {
    'prop1': PropTypes.bool.isRequired
};

${name^}.defaultProps = {
    'prop1': true
};
"
echo "$component" >> "_source/$modulePath/$folder/${name^}.jsx"

echo data >> "_source/$modulePath/$folder/${name,}.spec.jsx"
if [ $redux == "y" ]; then
    echo data >> "_source/$modulePath/$folder/${name,}Actions.js"
    echo data >> "_source/$modulePath/$folder/${name,}Container.js"
    echo data >> "_source/$modulePath/$folder/${name,}Reducers.js"
fi