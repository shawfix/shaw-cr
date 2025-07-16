import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function TaskfileSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #4db6ac)" d="M4 9v14l12 6V15z"></path>
  <path fill="var(--material-icon-color, #b2dfdb)" d="M16 3 4 9l12 6 12-6z"></path>
  <path fill="var(--material-icon-color, #80cbc4)" d="M16 15v14l12-6V9z"></path>
</svg>
;
};

function TaskfileIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={TaskfileSvg} {...props} />
};

export default TaskfileIcon;
