import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function CircleciSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <circle cx="16" cy="16" r="4" fill="#fafafa"></circle>
  <path fill="var(--material-icon-color, #fafafa)" d="M17.73 2.104a14 14 0 0 0-14.927 9.234.504.504 0 0 0 .48.662h5.525a.49.49 0 0 0 .416-.235 8 8 0 1 1 0 8.47A.49.49 0 0 0 8.81 20H3.28a.503.503 0 0 0-.479.66 14 14 0 1 0 14.93-18.556Z"></path>
</svg>
;
};

function CircleciIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={CircleciSvg} {...props} />
};

export default CircleciIcon;
