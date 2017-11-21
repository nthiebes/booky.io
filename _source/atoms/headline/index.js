import React from 'react';
import Headline from './Headline';

export function H1(props) {
  return <Headline { ...props } type="1" />;
}
H1.displayName = 'H1';

export function H2(props) {
  return <Headline { ...props } type="2" />;
}
H2.displayName = 'H2';

export function H3(props) {
  return <Headline { ...props } type="3" />;
}
H3.displayName = 'H3';
