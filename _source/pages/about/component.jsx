/* eslint-disable max-len */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Page from '../../templates/page';
import Headline from '../../atoms/headline';
import P from '../../atoms/paragraph';

/**
 * React component
 * 
 * @class About
 * @classdesc pages/about/About
 */
export default class About extends Component {
  render() {
    return (
      <Page>
        <Headline type={ 1 } text="This is a short headline in english" />
        <P>{'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'}</P>
        <P>{'Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'}</P>
        <Headline type={ 1 } text="Das ist eine kurze Überschrift" />
        <P>{'Lorem ipsum dolor sit amet.'}</P>
        <Headline type={ 1 } text="これは日本語の短い見出しです" />
        <P>{'Lorem ipsum dolor sit amet.'}</P>
        <Headline type={ 1 } text="Это короткий заголовок на русском языке" />
        <P>{'Lorem ipsum dolor sit amet.'}</P>
        <Headline type={ 1 } text="Đây là một tiêu đề ngắn bằng tiếng Việt" />
        <P>{'Lorem ipsum dolor sit amet.'}</P>
        <Headline type={ 1 } text="هذا عنوان قصير باللغة العربية" />
        <P>{'Lorem ipsum dolor sit amet.'}</P>
      </Page>
    );
  }
}

/* eslint-disable max-len */
