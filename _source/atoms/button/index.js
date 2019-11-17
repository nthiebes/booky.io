import React from 'react';
import Button from './Button';

export function ButtonSmallPrimary(props) {
  return <Button { ...props } size="small" color="primary" />;
}
ButtonSmallPrimary.displayName = 'ButtonSmallPrimary';

export function ButtonSmallLight(props) {
  return <Button { ...props } size="small" color="light" />;
}
ButtonSmallLight.displayName = 'ButtonSmallLight';

export function ButtonSmallMedium(props) {
  return <Button { ...props } size="small" color="medium" />;
}
ButtonSmallMedium.displayName = 'ButtonSmallMedium';

export function ButtonSmallDark(props) {
  return <Button { ...props } size="small" color="dark" />;
}
ButtonSmallDark.displayName = 'ButtonSmallDark';

// export function ButtonSmallBlue(props) {
//   return <Button { ...props } size="small" color="blue" />;
// }
// ButtonSmallBlue.displayName = 'ButtonSmallBlue';

// export function ButtonSmallGreen(props) {
//   return <Button { ...props } size="small" color="green" />;
// }
// ButtonSmallBlue.displayName = 'ButtonSmallGreen';

export function ButtonLargePrimary(props) {
  return <Button { ...props } size="large" color="primary" />;
}
ButtonLargePrimary.displayName = 'ButtonLargePrimary';

export function ButtonLargeLight(props) {
  return <Button { ...props } size="large" color="light" />;
}
ButtonLargeLight.displayName = 'ButtonLargeLight';

export function ButtonLargeDark(props) {
  return <Button { ...props } size="large" color="dark" />;
}
ButtonLargeDark.displayName = 'ButtonLargeDark';

export function ButtonLargeBlue(props) {
  return <Button { ...props } size="large" color="blue" />;
}
ButtonLargeBlue.displayName = 'ButtonLargeBlue';

export function ButtonLargeGreen(props) {
  return <Button { ...props } size="large" color="green" />;
}
ButtonLargeGreen.displayName = 'ButtonLargeGreen';
