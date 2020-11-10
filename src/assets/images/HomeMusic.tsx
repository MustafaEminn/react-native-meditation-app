import * as React from "react";
import Svg, { G, Mask, Path, Rect } from "react-native-svg";

function HomeMusic(props: any) {
  return (
    <Svg
      width={props.width}
      height={props.heiht}
      viewBox="0 0 375 95"
      fill="none"
      {...props}
    >
      <Mask id="prefix__a" x={0} y={0} width={375} height={95}>
        <Rect x={0.5} width={374} height={95} rx={10} fill="#333242" />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path
          d="M58.452 40.446C58.452 23.07 82.952 6.584 98.5 0H.5v95h89.048c3.77-15.52-4.712-27.277-13.663-32.92-8.952-5.644-17.433-7.58-17.433-21.634z"
          fill="#444359"
        />
        <Path
          d="M200.05 32.719C184.204 16.628 191.594 2.202 197.27-3H374.5v46.469c-40.659 43.694-67.765 11.79-70.197 3.814-2.433-7.976-4.865-35.025-43.091-11.79-38.227 23.234-41.354 17.339-61.162-2.774z"
          fill="#9B9DB4"
          fillOpacity={0.49}
        />
        <Path
          d="M246.5 98c0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32-3.636-33.934 8.721-27.722 22.304-20.656 5.96 3.1 12.879 2.054 18.89-.944C243.788 66.377 246.5 82.442 246.5 98z"
          fill="#6C71A1"
        />
      </G>
    </Svg>
  );
}

export default HomeMusic;
