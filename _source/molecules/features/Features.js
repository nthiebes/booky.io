import React from 'react';
import { FormattedMessage } from 'react-intl';

import { H3 } from '../../atoms/headline';
import Icon from '../../atoms/icon';

const Features = () => (
  <ul className="features">
    <li className="features__feature">
      <H3 style="h2" className="features__feature-name">
        <Icon icon="lock" />
        <FormattedMessage id="misc.feature8" />
      </H3>
    </li>
    <li className="features__feature">
      <H3 style="h2" className="features__feature-name">
        <Icon icon="customize" />
        <FormattedMessage id="misc.feature5" />
      </H3>
    </li>
    <li className="features__feature">
      <H3 style="h2" className="features__feature-name">
        <Icon icon="tags" />
        <FormattedMessage id="misc.feature10" />
      </H3>
    </li>
    <li className="features__feature">
      <H3 style="h2" className="features__feature-name">
        <Icon icon="search" />
        <FormattedMessage id="misc.feature4" />
      </H3>
    </li>
    <li className="features__feature">
      <H3 style="h2" className="features__feature-name">
        <Icon icon="collection" />
        <FormattedMessage id="misc.feature6" />
      </H3>
    </li>
    <li className="features__feature">
      <H3 style="h2" className="features__feature-name">
        <Icon icon="phone" />
        <FormattedMessage id="misc.feature7" />
      </H3>
    </li>
    <li className="features__feature">
      <H3 style="h2" className="features__feature-name">
        <Icon icon="extension" />
        <FormattedMessage id="misc.feature1" />
      </H3>
    </li>
    <li className="features__feature">
      <H3 style="h2" className="features__feature-name">
        <Icon icon="star" />
        <FormattedMessage id="misc.feature2" />
      </H3>
    </li>
    <li className="features__feature">
      <H3 style="h2" className="features__feature-name">
        <Icon icon="import-export" />
        <FormattedMessage id="misc.feature3" />
      </H3>
    </li>
    <li className="features__feature">
      <H3 style="h2" className="features__feature-name">
        <Icon icon="accessible" />
        <FormattedMessage id="misc.feature11" />
      </H3>
    </li>
  </ul>
);

export default Features;
