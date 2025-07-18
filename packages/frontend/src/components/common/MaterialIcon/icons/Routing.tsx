import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function RoutingSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #43a047)" d="M18 14v-2h8l2-3-2-3h-8V4l-2-2-2 2v6H6l-2 3 2 3h8v10a4 4 0 0 0-4 4h12a4 4 0 0 0-4-4v-6h8l2-3-2-3Z"></path>
</svg>
;
};

function RoutingIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={RoutingSvg} {...props} />
};

export default RoutingIcon;
