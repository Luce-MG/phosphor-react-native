/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle } from 'react-native-svg';

import { IconProps } from '../lib';

function DiceOne(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Rect
        x={40}
        y={40}
        width={176}
        height={176}
        rx={24}
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Circle cx={128} cy={128} r={12} fill={props.color} />
    </Svg>
  );
}

export default DiceOne;