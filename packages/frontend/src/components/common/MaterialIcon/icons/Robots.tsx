import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function RobotsSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ff5252)" d="M28.586 18H28a8 8 0 0 0-8-8h-2V8.445a4 4 0 1 0-4 0V10h-2a8 8 0 0 0-8 8h-.586A1.414 1.414 0 0 0 2 19.414v3.172A1.414 1.414 0 0 0 3.414 24H4v1a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3v-1h.586A1.414 1.414 0 0 0 30 22.586v-3.172A1.414 1.414 0 0 0 28.586 18M11 22a3 3 0 1 1 3-3 3 3 0 0 1-3 3m10 0a3 3 0 1 1 3-3 3 3 0 0 1-3 3"></path>
</svg>
;
};

function RobotsIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={RobotsSvg} {...props} />
};

export default RobotsIcon;
