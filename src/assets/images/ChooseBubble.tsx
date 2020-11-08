import * as React from "react";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

function ChooseBubble(props: any) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 415 755"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M414.5 149.339c25.53-13.092 43-39.675 43-70.339 0-43.63-35.37-79-79-79-26.515 0-49.98 13.063-64.309 33.105A55.54 55.54 0 00299 31c-19.281 0-36.265 9.832-46.213 24.755C245.484 47.908 235.065 43 223.5 43c-15.634 0-29.174 8.97-35.753 22.043C176.807 58.658 164.081 55 150.5 55c-24.775 0-46.706 12.175-60.137 30.868A52.05 52.05 0 0076.5 84c-8.16 0-15.882 1.88-22.755 5.23C46.172 75.95 31.881 67 15.5 67c-24.3 0-44 19.7-44 44 0 19.033 12.085 35.244 29 41.377V755h414V149.339zM249.958 113h.265l-.086-.159-.179.159z"
        fill="url(#prefix__paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={207.5}
          y1={32}
          x2={207.5}
          y2={545.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FAF8F5" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default ChooseBubble;
