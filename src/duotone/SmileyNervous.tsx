/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle, Polyline } from 'react-native-svg';

import { IconProps } from '../lib';

function SmileyNervous(props: IconProps) {
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
      <Circle cx={128} cy={128} r={96} opacity={0.2} fill={props.color} />
      <Circle
        cx={128}
        cy={128}
        r={96}
        fill="none"
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={16}
      />
      <Polyline
        points="80 172 96 152 112 172 128 152 144 172 160 152 176 172"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Circle cx={92} cy={108} r={12} fill={props.color} />
      <Circle cx={164} cy={108} r={12} fill={props.color} />
    </Svg>
  );
}

export default SmileyNervous;