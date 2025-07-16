import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FontSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #f44336)" d="M24 28h4L18 4h-4L4 28h4l8-19.422"></path>
  <path fill="var(--material-icon-color, #f44336)" d="M8 20h16v4H8z"></path>
</svg>
;
};

function FontIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FontSvg} {...props} />
};

export default FontIcon;
