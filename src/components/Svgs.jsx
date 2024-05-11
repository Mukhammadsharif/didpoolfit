import React from 'react';
import Svg, {
  Circle,
  Defs,
  LinearGradient,
  Path,
  Rect,
  Stop,
} from 'react-native-svg';

export const HomeInactiveIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      stroke="#A5A3B0"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M9.157 20.771v-3.066c0-.78.636-1.414 1.424-1.42h2.886c.792 0 1.433.636 1.433 1.42v3.076c0 .662.534 1.204 1.203 1.219h1.924c1.918 0 3.473-1.54 3.473-3.438v0-8.724a2.44 2.44 0 0 0-.962-1.905l-6.58-5.248a3.18 3.18 0 0 0-3.945 0L3.462 7.943A2.42 2.42 0 0 0 2.5 9.847v8.715C2.5 20.46 4.055 22 5.973 22h1.924c.685 0 1.241-.55 1.241-1.229v0"
    />
  </Svg>
);

export const HomeActiveIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={31}
    fill="none"
    {...props}>
    <Circle cx={12} cy={29} r={2} fill="url(#a)" />
    <Path
      fill="url(#b)"
      fillRule="evenodd"
      d="M9.157 20.771v-3.066c0-.78.636-1.414 1.424-1.42h2.886c.792 0 1.433.636 1.433 1.42v3.076c0 .662.534 1.204 1.203 1.219h1.924c1.918 0 3.473-1.54 3.473-3.438V9.838a2.44 2.44 0 0 0-.962-1.905l-6.58-5.248a3.18 3.18 0 0 0-3.945 0L3.462 7.943A2.42 2.42 0 0 0 2.5 9.847v8.715C2.5 20.46 4.055 22 5.973 22h1.924c.685 0 1.241-.55 1.241-1.229"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={17.333}
        x2={7.643}
        y1={34.704}
        y2={33.968}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#CC8FED" />
        <Stop offset={1} stopColor="#6B50F6" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={37.333}
        x2={-8.72}
        y1={40.519}
        y2={37.195}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#CC8FED" />
        <Stop offset={1} stopColor="#6B50F6" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export const ActivityInactiveIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      stroke="#A5A3B0"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="m7.245 14.781 2.993-3.89 3.414 2.682 2.93-3.78"
    />
    <Circle
      cx={19.995}
      cy={4.2}
      r={1.922}
      stroke="#A5A3B0"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
    />
    <Path
      stroke="#A5A3B0"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M14.925 3.12H7.657c-3.012 0-4.879 2.133-4.879 5.144v8.083c0 3.011 1.83 5.135 4.879 5.135h8.604c3.011 0 4.879-2.124 4.879-5.135v-7.04"
    />
  </Svg>
);

export const ActivityActiveIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="m7.245 14.781 2.993-3.89 3.414 2.682 2.93-3.78"
    />
    <Circle
      cx={19.995}
      cy={4.2}
      r={1.922}
      stroke="url(#b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
    />
    <Path
      stroke="url(#c)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M14.925 3.12H7.657c-3.012 0-4.879 2.133-4.879 5.144v8.083c0 3.011 1.83 5.135 4.879 5.135h8.604c3.011 0 4.879-2.124 4.879-5.135v-7.04"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={24.362}
        x2={2.064}
        y1={19.401}
        y2={16.23}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#CC8FED" />
        <Stop offset={1} stopColor="#6B50F6" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={25.121}
        x2={15.808}
        y1={9.682}
        y2={8.974}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#CC8FED" />
        <Stop offset={1} stopColor="#6B50F6" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={36.441}
        x2={-8.04}
        y1={38.483}
        y2={35.104}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#CC8FED" />
        <Stop offset={1} stopColor="#6B50F6" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export const BackNav = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}>
    <Rect width={32} height={32} fill="#F7F8F8" rx={8} />
    <Path
      stroke="#1D1617"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M18.333 20.667 13.667 16l4.666-4.667"
    />
  </Svg>
);

export const FirstButton = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={61}
    height={61}
    fill="none"
    {...props}>
    <Circle cx={30} cy={31} r={29.75} stroke="#F7F8F8" strokeWidth={0.5} />
    <Path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeWidth={2}
      d="M60 31C60 14.431 46.569 1 30 1"
    />
    <Circle cx={30} cy={31} r={25} fill="url(#b)" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m27.375 25.75 5.25 5.25-5.25 5.25"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={85}
        x2={12.325}
        y1={58.778}
        y2={53.256}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#CC8FED" />
        <Stop offset={1} stopColor="#6B50F6" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={96.667}
        x2={-24.459}
        y1={102.296}
        y2={93.094}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#CC8FED" />
        <Stop offset={1} stopColor="#6B50F6" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export const SecondButton = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={61}
    height={62}
    fill="none"
    {...props}>
    <Circle cx={30} cy={31} r={29.75} stroke="#F7F8F8" strokeWidth={0.5} />
    <Path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeWidth={2}
      d="M30 61c16.569 0 30-13.431 30-30C60 14.431 46.569 1 30 1"
    />
    <Circle cx={30} cy={31} r={25} fill="url(#b)" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m27.375 25.75 5.25 5.25-5.25 5.25"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={85}
        x2={12.01}
        y1={116.556}
        y2={113.783}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#CC8FED" />
        <Stop offset={1} stopColor="#6B50F6" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={96.667}
        x2={-24.459}
        y1={102.296}
        y2={93.094}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#CC8FED" />
        <Stop offset={1} stopColor="#6B50F6" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export const ThirdButton = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={62}
    height={62}
    fill="none"
    {...props}>
    <Circle cx={31} cy={31} r={29.75} stroke="#F7F8F8" strokeWidth={0.5} />
    <Path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeWidth={2}
      d="M1 31c0 16.569 13.431 30 30 30 16.569 0 30-13.431 30-30C61 14.431 47.569 1 31 1"
    />
    <Circle cx={31} cy={31} r={25} fill="url(#b)" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m28.375 25.75 5.25 5.25-5.25 5.25"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={111}
        x2={-34.351}
        y1={116.556}
        y2={105.513}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#CC8FED" />
        <Stop offset={1} stopColor="#6B50F6" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={97.667}
        x2={-23.459}
        y1={102.296}
        y2={93.094}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#CC8FED" />
        <Stop offset={1} stopColor="#6B50F6" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export const LastButton = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    fill="none"
    {...props}>
    <Circle cx={30} cy={30} r={29.75} stroke="#F7F8F8" strokeWidth={0.5} />
    <Circle cx={30} cy={30} r={29} stroke="url(#a)" strokeWidth={2} />
    <Circle cx={30} cy={30} r={25} fill="url(#b)" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m27.375 24.75 5.25 5.25-5.25 5.25"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={110}
        x2={-35.351}
        y1={115.556}
        y2={104.513}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#CC8FED" />
        <Stop offset={1} stopColor="#6B50F6" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={96.667}
        x2={-24.459}
        y1={101.296}
        y2={92.094}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#CC8FED" />
        <Stop offset={1} stopColor="#6B50F6" />
      </LinearGradient>
    </Defs>
  </Svg>
);
