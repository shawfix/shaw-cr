import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function DotjsSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="1em" height="1em">
  <g fill="#2196f3" fill-opacity=".604" transform="translate(-6.66 100.49)">
    <ellipse cx="37.18" cy="-256.97" rx="110.14" ry="139.47" transform="matrix(-.3005 .95378 -.96071 -.27755 0 0)"></ellipse>
    <ellipse cx="38.835" cy="-197.03" rx="110.14" ry="139.47" transform="matrix(-.3005 .95378 -.96071 -.27755 0 0)"></ellipse>
    <ellipse cx="-224.78" cy="-5.066" rx="110.14" ry="139.47" transform="matrix(-.95378 -.3005 .27755 -.96071 0 0)"></ellipse>
    <ellipse cx="-228.55" cy="-60.291" rx="110.14" ry="139.47" transform="matrix(-.95378 -.3005 .27755 -.96071 0 0)"></ellipse>
  </g>
</svg>
;
};

function DotjsIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={DotjsSvg} {...props} />
};

export default DotjsIcon;
