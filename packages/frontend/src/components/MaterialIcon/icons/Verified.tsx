import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function VerifiedSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #8bc34a)" d="M9 3 8 6H4l1 4-3 2 3 2-1 4h4l1 3 3-2 3 2 1-3h4l-1-4 3-2-3-2 1-4h-4l-1-3-3 2zm7 5 1 1-7 7-3-3 1-1 2 2z"></path>
</svg>
;
};

function VerifiedIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={VerifiedSvg} {...props} />
};

export default VerifiedIcon;
