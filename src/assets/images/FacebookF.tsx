import * as React from "react";
import Svg, { Path } from "react-native-svg";

function FacebookF(props: any) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 13 25"
      fill="none"
      {...props}
    >
      <Path
        d="M10.439 4.93h2.197V1.102c-.38-.052-1.683-.17-3.201-.17-3.168 0-5.337 1.993-5.337 5.655v3.37H.602v4.277h3.496V25h4.285V14.236h3.354l.533-4.278H8.382V7.012c.001-1.236.334-2.083 2.057-2.083z"
        fill="#fff"
      />
    </Svg>
  );
}

export default FacebookF;
