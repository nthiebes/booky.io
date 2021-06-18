import React from 'react';
import { FormattedMessage } from 'react-intl';

import { H3 } from '../../atoms/headline';
import Icon from '../../atoms/icon';
import Link from '../../atoms/link';

export const AllFeatures = () => (
  <ul className="all-features">
    <li className="all-features__feature">
      <H3 style="h2" className="all-features__feature-name">
        <Icon icon="lock" className="all-features__icon" />
        <FormattedMessage id="misc.feature8" />
      </H3>
    </li>
    <li className="all-features__feature">
      <H3 style="h2" className="all-features__feature-name">
        <Icon icon="customize" className="all-features__icon" />
        <FormattedMessage id="misc.feature5" />
      </H3>
    </li>
    <li className="all-features__feature">
      <H3 style="h2" className="all-features__feature-name">
        <Icon icon="phone" className="all-features__icon" />
        <FormattedMessage id="misc.feature7" />
      </H3>
    </li>
    <li className="all-features__feature">
      <H3 style="h2" className="all-features__feature-name">
        <Icon icon="search" className="all-features__icon" />
        <FormattedMessage id="misc.feature4" />
      </H3>
    </li>
    <li className="all-features__feature">
      <H3 style="h2" className="all-features__feature-name">
        <Icon icon="extension" className="all-features__icon" />
        <FormattedMessage id="misc.feature1" />
      </H3>
    </li>
    <li className="all-features__feature">
      <H3 style="h2" className="all-features__feature-name">
        <Icon icon="star" className="all-features__icon" />
        <Link to="/bookmarklet" className="all-features__link" color="medium">
          <FormattedMessage id="misc.feature2" />
        </Link>
      </H3>
    </li>
    <li className="all-features__feature">
      <H3 style="h2" className="all-features__feature-name">
        <Icon icon="collection" className="all-features__icon" />
        <FormattedMessage id="misc.feature6" />
      </H3>
    </li>
    <li className="all-features__feature">
      <H3 style="h2" className="all-features__feature-name">
        <Icon icon="notes" className="all-features__icon" />
        <FormattedMessage id="misc.feature9" />
      </H3>
    </li>
    <li className="all-features__feature">
      <H3 style="h2" className="all-features__feature-name">
        <Icon icon="import-export" className="all-features__icon" />
        <FormattedMessage id="misc.feature3" />
      </H3>
    </li>
    <li className="all-features__feature">
      <H3 style="h2" className="all-features__feature-name">
        <Icon icon="accessible" className="all-features__icon" />
        <FormattedMessage id="misc.feature11" />
      </H3>
    </li>
  </ul>
);
