import React from 'react';
import Headline from './HeadlineContainer';

export const Display1 = (props) => <Headline { ...props } type="1" display />;
Display1.displayName = 'Display1';

export const Display2 = (props) => <Headline { ...props } type="2" display />;
Display2.displayName = 'Display2';

export const H1 = (props) => <Headline { ...props } type="1" />;
H1.displayName = 'H1';

export const H2 = (props) => <Headline { ...props } type="2" />;
H2.displayName = 'H2';

export const H3 = (props) => <Headline { ...props } type="3" />;
H3.displayName = 'H3';

export const H4 = (props) => <Headline { ...props } type="4" />;
H3.displayName = 'H4';
