import React from 'react';
import { FormattedMessage } from 'react-intl';

import P from '../../atoms/paragraph';
import { H3 } from '../../atoms/headline';
import Icon from '../../atoms/icon';

const Features = () => (
  <ul className="features">
    <li className="features__feature">
      <H3 className="features__feature-name">
        <Icon icon="lock" />
        <FormattedMessage id="misc.feature8" />
      </H3>
      <P>
        <FormattedMessage id="Private and customizable bookmarks page." />
      </P>
    </li>
    <li className="features__feature">
      <H3 className="features__feature-name">
        <Icon icon="customize" />
        <FormattedMessage id="misc.feature5" />
      </H3>
      <P>
        <FormattedMessage id="Customize booky to your needs." />
      </P>
    </li>
    <li className="features__feature">
      <H3 className="features__feature-name">
        <Icon icon="phone" />
        <FormattedMessage id="misc.feature7" />
      </H3>
      <P>
        <FormattedMessage id="Available from anywhere on desktop or mobile." />
      </P>
    </li>
    <li className="features__feature">
      <H3 className="features__feature-name">
        <Icon icon="collection" />
        <FormattedMessage id="misc.feature6" />
      </H3>
      <P>
        <FormattedMessage id="Organize your bookmarks in collections and categories." />
      </P>
    </li>
    <li className="features__feature">
      <H3 className="features__feature-name">
        <Icon icon="extension" />
        <FormattedMessage id="misc.feature1" />
      </H3>
      <P>
        <FormattedMessage id="Available for Chrome, Firefox, Opera and Edge." />
      </P>
    </li>
    <li className="features__feature">
      <H3 className="features__feature-name">
        <Icon icon="star" />
        <FormattedMessage id="misc.feature2" />
      </H3>
      <P>
        <FormattedMessage id="Quickly add links to booky with our bookmarklet." />
      </P>
    </li>
    <li className="features__feature">
      <H3 className="features__feature-name">
        <Icon icon="tags" />
        <FormattedMessage id="misc.feature10" />
      </H3>
      <P>
        <FormattedMessage id="Available for Chrome, Firefox, Opera and Edge" />
      </P>
    </li>
    <li className="features__feature">
      <H3 className="features__feature-name">
        <Icon icon="search" />
        <FormattedMessage id="misc.feature4" />
      </H3>
      <P>
        <FormattedMessage id="Search all your bookmarks and tags." />
      </P>
    </li>
    <li className="features__feature">
      <H3 className="features__feature-name">
        <Icon icon="import-export" />
        <FormattedMessage id="misc.feature3" />
      </H3>
      <P>
        <FormattedMessage id="Import or backup your existing browser bookmarks." />
      </P>
    </li>
    <li className="features__feature">
      <H3 className="features__feature-name">
        <Icon icon="warning" />
        <FormattedMessage id="home.promoText" />
      </H3>
      <P>
        <FormattedMessage id="dies das" />
      </P>
    </li>
    {/* <li className="features__feature">
      <H3 className="features__feature-name">
        <Icon icon="notes" />
        <FormattedMessage id="misc.feature9" />
      </H3>
      <P>
        <FormattedMessage id="Add notes to your bookmarks." />
      </P>
    </li> */}
  </ul>
);

export default Features;
