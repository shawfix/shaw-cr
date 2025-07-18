import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function RegeditSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #039be5)" d="M10 23v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1m-6-8v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1m0-8v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1m13 15h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1m-5-7v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1m.41-7.632 1.637 3.65a1 1 0 0 0 1.321.503l3.65-1.637a1 1 0 0 0 .503-1.322l-1.637-3.65a1 1 0 0 0-1.322-.503l-3.65 1.638a1 1 0 0 0-.503 1.321M25 22h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1m-2.256-9.318-2.195 3.344a1 1 0 0 0 .287 1.384l3.344 2.195a1 1 0 0 0 1.385-.287l2.195-3.344a1 1 0 0 0-.287-1.384l-3.344-2.195a1 1 0 0 0-1.385.287M22 5v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1"></path>
</svg>
;
};

function RegeditIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={RegeditSvg} {...props} />
};

export default RegeditIcon;
