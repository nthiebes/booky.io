/* eslint-disable max-len */

import React, { Component } from 'react';
import Page from '../../templates/page';
import { H1, H2, H3 } from '../../atoms/headline';
import P from '../../atoms/paragraph';

export default class About extends Component {
  render() {
    return (
      <Page>
        <H1>{ 'This is a short headline in english' }</H1>
        <H2>{ 'This is a short headline in english' }</H2>
        <H3>{ 'This is a short headline in english' }</H3>
        <P>{ 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'}</P>
        <P>{ 'Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'}</P>
        <H1>{ 'Das ist eine kurze Überschrift' }</H1>
        <P>{ 'Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'}</P>
        <H2>{ 'This is a short headline in english' }</H2>
        <P>{ 'Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'}</P>
        <H1>{ 'これは日本語の短い見出しです' }</H1>
        <P>{ 'Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'}</P>
        <H3>{ 'This is a short headline in english' }</H3>
        <P>{ 'Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'}</P>
        <H1>{ 'Это короткий заголовок на русском языке' }</H1>
        <P>{ 'Lorem ipsum dolor sit amet.'}</P>
        <H1>{ 'Đây là một tiêu đề ngắn bằng tiếng Việt' }</H1>
        <P>{ 'Lorem ipsum dolor sit amet.'}</P>
        <H1>{ 'هذا عنوان قصير باللغة العربية' }</H1>
        <P>{ 'Lorem ipsum dolor sit amet.'}</P>
      </Page>
    );
  }
}

/* eslint-disable max-len */
