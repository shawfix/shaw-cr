import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function HackSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #607d8b)" d="m14 9-8 8V9l8-8zm12 12L16 31v-8l10-10z"></path>
  <path fill="var(--material-icon-color, #ffa000)" d="m6 20 8-8v8"></path>
  <path fill="var(--material-icon-color, #607d8b)" d="m6 30 8-8H6"></path>
  <path fill="var(--material-icon-color, #eceff1)" d="m16 20 10-10H16"></path>
</svg>
;
};

function HackIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={HackSvg} {...props} />
};

export default HackIcon;
