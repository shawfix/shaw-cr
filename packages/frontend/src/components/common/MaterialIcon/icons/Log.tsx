import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function LogSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="var(--material-icon-color, none)" viewBox="0 0 24 24" width="1em" height="1em">
  <path d="M0 0h24v24H0z"></path>
  <path fill="var(--material-icon-color, #afb42b)" d="M19 5v9h-5v5H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10l6-6V5c0-1.1-.9-2-2-2m-7 11H7v-2h5zm5-4H7V8h10z"></path>
</svg>
;
};

function LogIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={LogSvg} {...props} />
};

export default LogIcon;
