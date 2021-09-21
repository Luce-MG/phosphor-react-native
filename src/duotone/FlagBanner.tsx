/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Polygon, Polyline } from 'react-native-svg';

import { IconProps } from '../lib';

function FlagBanner(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      fill={props.color}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Polygon
        points="40 48 40 48 224 48 176 108 224 168 40 168 40 48"
        opacity={0.2}
      />
      <Polyline
        points="40 216 40 48 40 48 224 48 176 108 224 168 40 168"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default FlagBanner;
