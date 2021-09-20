import * as React from 'react';
import Svg, { Rect, G, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function Alarm(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <G>
        <Path d="M235.48047,54.46094,201.53906,20.51953a8,8,0,0,0-11.31347,11.314L224.1665,65.77441a8,8,0,1,0,11.314-11.31347Z" />
        <Path d="M65.77441,20.51953a8,8,0,0,0-11.31347,0L20.51953,54.46094a8,8,0,0,0,11.314,11.31347L65.77441,31.8335A8.00061,8.00061,0,0,0,65.77441,20.51953Z" />
        <Path d="M223.957,125.22363c-.02051-.71777-.0459-1.43408-.082-2.14892-.001-.02491-.00293-.04932-.00439-.07373A96.003,96.003,0,0,0,132.999,32.12939c-.02441-.00146-.04882-.00341-.07373-.00439-.71484-.03613-1.43115-.06152-2.14892-.082-.10742-.00293-.21436-.00879-.32227-.01172Q129.2295,32.00048,128,32q-1.22973,0-2.4541.03125c-.10791.00293-.21485.00879-.32227.01172-.71777.02051-1.43408.0459-2.14892.082-.02491.001-.04932.00293-.07373.00439A96.004,96.004,0,0,0,32.12939,123.001c-.00146.02441-.00341.04882-.00439.07373-.03613.71484-.06152,1.43115-.082,2.14892-.00293.10742-.00879.21436-.01172.32227Q32.00048,126.7705,32,128q0,1.22973.03125,2.4541c.00293.10791.00879.21485.01172.32227.02051.71777.0459,1.43408.082,2.14892.001.02491.00293.04932.00439.07373A96.003,96.003,0,0,0,123.001,223.87061c.02441.00146.04882.00341.07373.00439.71484.03613,1.43115.06152,2.14892.082.10742.00293.21436.00879.32227.01172q1.2246.03077,2.4541.03125,1.22973,0,2.4541-.03125c.10791-.00293.21485-.00879.32227-.01172.71777-.02051,1.43408-.0459,2.14892-.082.02491-.001.04932-.00293.07373-.00439A96.004,96.004,0,0,0,223.87061,132.999c.00146-.02441.00341-.04882.00439-.07373.03613-.71484.06152-1.43115.082-2.14892.00293-.10742.00879-.21436.01172-.32227Q223.99952,129.2295,224,128q0-1.22973-.03125-2.4541C223.96582,125.438,223.96,125.33105,223.957,125.22363ZM184,136H128a8.00008,8.00008,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z" />
      </G>
    </Svg>
  );
}

export default Alarm;