import React from 'react';
import { FormattedMessage } from 'react-intl';

import P from '../../atoms/paragraph';
import Icon from '../../atoms/icon';

export const AllFeatures = () => (
  <ul className="all-features">
    <li className="all-features__feature">
      <Icon
        icon="lock"
        color="primary"
        size="medium"
        className="all-features__icon"
      />
      <P>
        <b>
          <FormattedMessage id="misc.feature8" />
        </b>
      </P>
    </li>
    <li className="all-features__feature">
      <Icon
        icon="customize"
        color="primary"
        size="medium"
        className="all-features__icon"
      />
      <P noPadding>
        <b>
          <FormattedMessage id="misc.feature5" />
        </b>
      </P>
    </li>
    <li className="all-features__feature">
      <Icon
        icon="phone"
        color="primary"
        size="medium"
        className="all-features__icon"
      />
      <P>
        <b>
          <FormattedMessage id="misc.feature7" />
        </b>
      </P>
    </li>
    <li className="all-features__feature">
      <Icon
        icon="search"
        color="primary"
        size="medium"
        className="all-features__icon"
      />
      <P>
        <b>
          <FormattedMessage id="misc.feature4" />
        </b>
      </P>
    </li>
    <li className="all-features__feature">
      <Icon
        icon="extension"
        color="primary"
        size="medium"
        className="all-features__icon"
      />
      <P>
        <b>
          <FormattedMessage id="misc.feature1" />
        </b>
      </P>
    </li>
    <li className="all-features__feature">
      <Icon
        icon="star"
        color="primary"
        size="medium"
        className="all-features__icon"
      />
      <P>
        <b>
          <FormattedMessage id="misc.feature2" />
        </b>
      </P>
    </li>
    <li className="all-features__feature">
      <Icon
        icon="collection"
        color="primary"
        size="medium"
        className="all-features__icon"
      />
      <P>
        <b>
          <FormattedMessage id="misc.feature6" />
        </b>
      </P>
    </li>
    <li className="all-features__feature">
      <Icon
        icon="notes"
        color="primary"
        size="medium"
        className="all-features__icon"
      />
      <P>
        <b>
          <FormattedMessage id="misc.feature9" />
        </b>
      </P>
    </li>
    <li className="all-features__feature">
      <Icon
        icon="import-export"
        color="primary"
        size="medium"
        className="all-features__icon"
      />
      <P>
        <b>
          <FormattedMessage id="misc.feature3" />
        </b>
      </P>
    </li>
    <li className="all-features__feature">
      <Icon
        icon="accessible"
        color="primary"
        size="medium"
        className="all-features__icon"
      />
      <P>
        <b>
          <FormattedMessage id="misc.feature11" />
        </b>
      </P>
    </li>
  </ul>
);
