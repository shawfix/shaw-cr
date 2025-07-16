import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function HarmonixSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #536dfe)" d="M27 13 16 2 5 13l8 8-6 6 3 3 6-6 6 6 3-3-6-6zm-17 0 6-6 6 6-6 6z"></path>
</svg>
;
};

function HarmonixIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={HarmonixSvg} {...props} />
};

export default HarmonixIcon;
