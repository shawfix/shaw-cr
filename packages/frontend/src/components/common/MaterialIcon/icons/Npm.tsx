import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function NpmSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #E53935)" d="M4 4v24h24V4Zm20 20h-4V12h-4v12H8V8h16Z"></path>
</svg>
;
};

function NpmIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={NpmSvg} {...props} />
};

export default NpmIcon;
