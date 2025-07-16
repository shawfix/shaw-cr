import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function SystemdSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #00e676)" d="m9 8 3-2v4z"></path>
  <path fill="var(--material-icon-color, #eceff1)" d="M3 5H1v6h2v-1H2V6h1zm10 0h2v6h-2v-1h1V6h-1z"></path>
  <circle cx="6" cy="8" r="2" fill="#00e676"></circle>
</svg>
;
};

function SystemdIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={SystemdSvg} {...props} />
};

export default SystemdIcon;
