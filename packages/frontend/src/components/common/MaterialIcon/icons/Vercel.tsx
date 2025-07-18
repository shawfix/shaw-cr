import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function VercelSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #cfd8dc)" d="m16 6 12 20H4Z"></path>
</svg>
;
};

function VercelIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={VercelSvg} {...props} />
};

export default VercelIcon;
