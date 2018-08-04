import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from './index';

import '../../templates/booky/Booky.scss';

storiesOf('Link', module)
  .add('with text', () => (
    <Link href="/booky">{ 'Awesome link' }</Link>
  ));
