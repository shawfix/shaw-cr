import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function DrizzleSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #4caf50)" d="m5.22 23.118 3.647-6.593a1.712 1.712 0 1 0-2.996-1.657L2.224 21.46a1.712 1.712 0 0 0 2.996 1.658m12.02 0 3.648-6.593a1.712 1.712 0 1 0-2.996-1.657l-3.648 6.592a1.712 1.712 0 0 0 2.996 1.658m-3.378-5.96 3.88-6.588a1.706 1.706 0 0 0-2.94-1.73l-3.88 6.588a1.706 1.706 0 0 0 2.94 1.73m12.028 0 3.88-6.588a1.706 1.706 0 0 0-2.94-1.73l-3.88 6.588a1.706 1.706 0 0 0 2.94 1.73"></path>
</svg>
;
};

function DrizzleIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={DrizzleSvg} {...props} />
};

export default DrizzleIcon;
