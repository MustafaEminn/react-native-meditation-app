import * as React from "react";
import Svg, { Path } from "react-native-svg";

function BottomHome(props: any) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 23 22"
      fill="none"
      {...props}
    >
      <Path
        d="M20.82 7.506L13.228.819c-1.084-1.084-2.85-1.084-3.89-.045L1.656 7.551A3.932 3.932 0 00.5 10.347v8.955A2.7 2.7 0 003.198 22h16.134c1.48 0 2.69-1.21 2.69-2.698v-8.955c0-1.057-.413-2.052-1.202-2.841zm-.591 11.796a.901.901 0 01-.897.905H13.65v-5.772a.926.926 0 00-.932-.932H9.804a.931.931 0 00-.932.932v5.772H3.198a.903.903 0 01-.905-.905v-8.955c0-.564.233-1.129.591-1.497l7.682-6.767a.957.957 0 01.681-.287c.27 0 .538.108.753.323l7.592 6.696c.413.412.637.959.637 1.532v8.955z"
        fill={props.color}
      />
    </Svg>
  );
}

export default BottomHome;
