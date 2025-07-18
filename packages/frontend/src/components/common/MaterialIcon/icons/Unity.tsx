import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function UnitySvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #42a5f5)" d="M8 6.5 5 5l2-1V2L2 5v5l2-1V6.5L7 8v4.5L4 11l-2 1 6 3 6-3-2-1-3 1.5V8l3-1.5V9l2 1V5L9 2v2l2 1Z"></path>
</svg>
;
};

function UnityIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={UnitySvg} {...props} />
};

export default UnityIcon;
