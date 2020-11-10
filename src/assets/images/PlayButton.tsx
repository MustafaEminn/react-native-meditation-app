import * as React from "react";
import Svg, { Path } from "react-native-svg";

function PlayButton(props: any) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 12 12"
      fill="none"
      {...props}
    >
      <Path
        d="M10.664 4.574L3.006.222C1.892-.409.5.382.5 1.644v8.709c0 1.268 1.392 2.059 2.506 1.422l7.658-4.352a1.632 1.632 0 000-2.85z"
        fill={props.color}
      />
    </Svg>
  );
}

export default PlayButton;
