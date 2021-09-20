import React, { useContext, useMemo } from 'react';
import { IconProps, IconContext } from '../lib';

import bold from '../bold/ArrowFatLineLeft';
import duotone from '../duotone/ArrowFatLineLeft';
import fill from '../fill/ArrowFatLineLeft';
import light from '../light/ArrowFatLineLeft';
import regular from '../regular/ArrowFatLineLeft';
import thin from '../thin/ArrowFatLineLeft';

function ArrowFatLineLeft({ weight, color, size, style }: IconProps) {
  const {
    color: contextColor = '#000',
    size: contextSize = 24,
    weight: contextWeight = 'regular',
    style: contextStyle,
  } = useContext(IconContext);

  const IconComponent = useMemo(() => {
    const iconWeight = weight ?? contextWeight;

    const weightMap = {
      bold,
      duotone,
      fill,
      light,
      regular,
      thin,
    };

    return weightMap[iconWeight];
  }, [weight, contextWeight]);

  return (
    <IconComponent
      color={color ?? contextColor}
      size={size ?? contextSize}
      style={{
        ...contextStyle,
        ...style,
      }}
    />
  );
}

export default ArrowFatLineLeft;