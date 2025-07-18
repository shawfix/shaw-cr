import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function RiotSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #e53935)" d="M20 4H4.5a.5.5 0 0 0-.5.5V22a6 6 0 0 0 6 6V10.5a.5.5 0 0 1 .5-.5H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V12a8 8 0 0 0-8-8"></path>
  <path fill="var(--material-icon-color, #e53935)" d="M24 16H14a6 6 0 0 0 6 6h1a1 1 0 0 1 1 1v5h2a4 4 0 0 0 4-4v-4a4 4 0 0 0-4-4"></path>
</svg>
;
};

function RiotIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={RiotSvg} {...props} />
};

export default RiotIcon;
