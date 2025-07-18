import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function HostsLightSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #455a64)" d="m14 6-3-3v2H7v2h4v2M5 7l-3 3 3 3v-2h4V9H5z"></path>
</svg>
;
};

function HostsLightIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={HostsLightSvg} {...props} />
};

export default HostsLightIcon;
