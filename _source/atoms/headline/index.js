import React from 'react';
import Headline from './HeadlineContainer';

export function Display1(props) {
  return <Headline { ...props } type="1" display />;
}
Display1.displayName = 'Display1';

export function Display2(props) {
  return <Headline { ...props } type="2" display />;
}
Display2.displayName = 'Display2';

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
