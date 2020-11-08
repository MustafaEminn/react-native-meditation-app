import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Eye(props: any) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 12"
      fill="none"
      {...props}
    >
      <Path
        d="M19.094 3.099c.713-.888 1.048-1.588 1.048-1.588L19.094 3.1zm0 0c-.678.844-1.696 1.86-3.09 2.605m3.09-2.605l-3.09 2.605m3.09-2.605l3.145 1.557M11.757 6.752A8.887 8.887 0 017.51 5.704m4.247 1.048L7.51 5.704m4.247 1.048a8.887 8.887 0 004.246-1.048m-4.246 1.048l4.246-1.048m-4.246 1.048v3.67M7.51 5.703L4.42 8.85m3.09-3.145c-1.32-.706-2.303-1.653-2.98-2.469m2.98 2.47l-2.98-2.47m11.473 2.47l2.567 3.144M4.53 3.235c-.788-.951-1.16-1.724-1.16-1.724l1.16 1.724zm0 0l-3.256 1.42"
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Eye;
