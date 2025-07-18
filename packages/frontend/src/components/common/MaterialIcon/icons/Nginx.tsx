import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function NginxSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #43a047)" d="M16 0 2 8v16l14 8 14-8V8Zm8 23a1 1 0 0 1-1 1h-2.52a1 1 0 0 1-.78-.375L12 14v9a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2.52a1 1 0 0 1 .78.375L20 18V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Z"></path>
</svg>
;
};

function NginxIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={NginxSvg} {...props} />
};

export default NginxIcon;
