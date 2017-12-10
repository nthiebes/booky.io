import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../../templates/modal';
import Icon from '../../atoms/icon';

export default class Structure extends Component {
  render() {
    const { dashboards, open, toggleStructureView } = this.props;

    return (
      <Modal open={ open } onClose={ toggleStructureView } headline="Edit site structure">
        { dashboards.map((dashboard, index) => [
          <li key={ index } className="structure__dashboard">
            <label className="structure__label">{ dashboard.name }</label>
            <Icon className="structure__icon" icon="drag" title="Drag dashboard" />
          </li>,
          <div key={ index + dashboards.length } className="structure__categories">
            { dashboard.categories.map((category, categoryIndex) => (
              <li key={ categoryIndex } className="structure__category">
                <label className="structure__label">{ category.name }</label>
                <Icon className="structure__icon" icon="drag" title="Drag dashboard" />
              </li>
            )) }
          </div>
        ]) }
      </Modal>
    );
  }
}

Structure.propTypes = {
  dashboards: PropTypes.array.isRequired,
  open: PropTypes.bool.isRequired,
  toggleStructureView: PropTypes.func.isRequired
};
