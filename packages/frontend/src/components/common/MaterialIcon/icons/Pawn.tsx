import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function PawnSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ef6c00)" d="M6 28h20v2H6zm8-18h4l4 14H10z"></path>
  <path fill="var(--material-icon-color, #ef6c00)" d="M10 12h12v2H10z"></path>
  <circle cx="16" cy="7" r="4" fill="#ef6c00"></circle>
</svg>
;
};

function PawnIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={PawnSvg} {...props} />
};

export default PawnIcon;
