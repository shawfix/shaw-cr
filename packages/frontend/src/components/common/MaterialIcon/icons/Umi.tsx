import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function UmiSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #455a64)" d="M1 8a7 7 0 0 0 4 6.316V15h6v-.684A7 7 0 0 0 15 8z"></path>
  <path fill="var(--material-icon-color, #f5f5f5)" d="M8 3a5 5 0 0 0-5 5h10a5 5 0 0 0-5-5"></path>
  <path fill="var(--material-icon-color, #2196f3)" d="M2.092 9A6 6 0 0 0 8 14a6 6 0 0 0 5.908-5z"></path>
  <g fill="#455a64">
    <g stroke-width="0">
      <circle cx="5.5" cy="6.5" r=".5"></circle>
      <circle cx="10.5" cy="6.5" r=".5"></circle>
      <circle cx="6.5" cy="5.5" r=".5"></circle>
    </g>
    <path d="M8 2a6 6 0 0 0-6 6h1a5 5 0 0 1 5-5 5 5 0 0 1 5 5h1a6 6 0 0 0-6-6"></path>
  </g>
</svg>
;
};

function UmiIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={UmiSvg} {...props} />
};

export default UmiIcon;
