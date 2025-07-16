import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function JupyterSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #f57c00)" d="M6.2 18a22.7 22.7 0 0 0 9.8 2 22.7 22.7 0 0 0 9.8-2 10.002 10.002 0 0 1-19.6 0m19.6-4a22.7 22.7 0 0 0-9.8-2 22.7 22.7 0 0 0-9.8 2 10.002 10.002 0 0 1 19.6 0"></path>
  <circle cx="27" cy="5" r="3" fill="#757575"></circle>
  <circle cx="5" cy="27" r="3" fill="#9e9e9e"></circle>
  <circle cx="5" cy="5" r="3" fill="#616161"></circle>
</svg>
;
};

function JupyterIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={JupyterSvg} {...props} />
};

export default JupyterIcon;
