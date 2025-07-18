import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function WranglerSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #f57f17)" d="M22 20H10.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H22v-6.449A5.95 5.95 0 0 0 18 10h-2a5.98 5.98 0 0 0-4.463 2H10a4 4 0 0 0-4 4 4 4 0 0 0-4 4v1.5a.5.5 0 0 0 .5.5H22Z"></path>
  <path fill="var(--material-icon-color, #ffab40)" d="M24 14v4h1.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H24v2h5.5a.5.5 0 0 0 .5-.5V20a6 6 0 0 0-6-6"></path>
</svg>
;
};

function WranglerIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={WranglerSvg} {...props} />
};

export default WranglerIcon;
