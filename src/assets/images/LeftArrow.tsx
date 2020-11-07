import * as React from "react";
import Svg, { Path } from "react-native-svg";

function LeftArrow(props: any) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 19 19"
      fill="none"
      {...props}
    >
      <Path
        d="M18.85 10.5H3.572l6.411 6.589L8.61 18.5l-8.23-8.433a.806.806 0 010-1.123L8.608.5l1.375 1.411L3.573 8.5h15.276v2z"
        fill="#3F414E"
      />
    </Svg>
  );
}

export default LeftArrow;
