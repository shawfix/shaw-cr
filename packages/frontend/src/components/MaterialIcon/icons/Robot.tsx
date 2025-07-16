import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function RobotSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #00bfa5)" d="M25.172 6 28 8.828v14.344L25.172 26H6.828L4 23.172V8.828L6.828 6zM26 4H6L2 8v16l4 4h20l4-4V8z"></path>
  <path fill="var(--material-icon-color, #00bfa5)" d="M8 20h16v2H8zm0-6v2h2v-2a2 2 0 0 1 2-2 2 2 0 0 1 2 2v2h2v-2a4 4 0 0 0-4-4 4 4 0 0 0-4 4m9.876.268 5.196-3 1 1.732-5.196 3z"></path>
</svg>
;
};

function RobotIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={RobotSvg} {...props} />
};

export default RobotIcon;
