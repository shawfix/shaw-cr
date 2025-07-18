import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function NetlifyLightSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #00bfa5)" d="m11.25 2.232-.127.127v4.567l.127.129h1.526l.126-.13V2.36l-.126-.127H11.25zM6.69 5.455 5.643 6.5v.21l1.6 1.6h1.108l.148-.148V7.055l-1.6-1.6zM1.026 11.11l-.127.127v1.528l.127.127h6.09l.127-.127v-1.528l-.127-.127zm15.858 0-.127.127v1.528l.127.127h6.09l.127-.127v-1.528l-.127-.127zm-9.64 4.58-1.6 1.6v.21l1.045 1.046h.21l1.6-1.6v-1.109l-.148-.146zm4.005 1.256-.127.13v4.566l.127.127h1.526l.126-.127v-4.567l-.126-.129z"></path>
  <path fill="var(--material-icon-color, #00897b)" d="M14.855 15.172h-1.523l-.127-.127V11.48c0-.634-.249-1.125-1.013-1.142-.394-.01-.844 0-1.325.019l-.072.074v4.61l-.127.128H9.146l-.128-.127V8.956l.128-.127h3.425a2.41 2.41 0 0 1 2.41 2.41v3.806z"></path>
</svg>
;
};

function NetlifyLightIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={NetlifyLightSvg} {...props} />
};

export default NetlifyLightIcon;
