import React, { PureComponent, Fragment } from 'react';

import { H2, H3 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Icon from '../../atoms/icon';
import Skeleton from './../../atoms/skeleton';

export default class SearchSkeleton extends PureComponent {
  getCategory({ noMargin = false } = {}) {
    return (
      <ul>
        <H3 noMargin={noMargin}>
          <Skeleton className="search-skeleton__category" />
        </H3>
        <li className="bookmark search__bookmark">
          <Icon icon="search" useSkeleton className="search-skeleton__icon" />
          <Skeleton className="search-skeleton__link1" />
        </li>
        <li className="bookmark search__bookmark">
          <Icon icon="search" useSkeleton className="search-skeleton__icon" />
          <Skeleton className="search-skeleton__link2" />
        </li>
        <li className="bookmark search__bookmark">
          <Icon icon="search" useSkeleton className="search-skeleton__icon" />
          <Skeleton className="search-skeleton__link3" />
        </li>
      </ul>
    );
  }

  render() {
    return (
      <Fragment>
        <P className="search-skeleton__wrapper">
          <Skeleton className="search-skeleton__text" />
        </P>
        <ul className="search-skeleton__wrapper">
          <li>
            <H2>
              <Skeleton className="search-skeleton__collection" />
            </H2>
            {this.getCategory({ noMargin: true })}
            {this.getCategory()}
            {this.getCategory()}
          </li>
        </ul>
      </Fragment>
    );
  }
}
