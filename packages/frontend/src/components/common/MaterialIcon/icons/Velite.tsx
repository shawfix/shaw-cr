import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function VeliteSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="var(--material-icon-color, none)" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #43a047)" d="m5.767 7.155.918 2.46L5 13 1 3.014c.444 0 .866.107 1.267.221 1.433.408 2.594 1.594 3.5 3.92"></path>
  <path fill="var(--material-icon-color, #26a69a)" d="M15 3.014c-1.357-.423-2.581.024-3.602.943L6.75 8.285C4.833 10.077 3.69 9.871 3 8l2 5z"></path>
</svg>
;
};

function VeliteIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={VeliteSvg} {...props} />
};

export default VeliteIcon;
