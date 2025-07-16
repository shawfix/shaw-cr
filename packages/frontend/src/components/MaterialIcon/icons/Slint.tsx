import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function SlintSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #2979ff)" d="M12 1 3 7l5 2-2-2Z"></path>
  <path fill="var(--material-icon-color, #2979ff)" d="m4 15 9-6-5-2 2 2Z"></path>
</svg>
;
};

function SlintIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={SlintSvg} {...props} />
};

export default SlintIcon;
