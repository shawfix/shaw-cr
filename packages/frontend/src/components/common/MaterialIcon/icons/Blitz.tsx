import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function BlitzSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #7c4dff)" d="M8.613 11.997c1.333 0 2.588.621 3.389 1.677l3.454 4.552a.28.28 0 0 1 .025.297l-1.991 3.825a.284.284 0 0 1-.477.04l-7.901-10.39zm2.375-10.385 7.9 10.39h-3.5a4.25 4.25 0 0 1-3.39-1.676L8.546 5.774a.28.28 0 0 1-.025-.297l1.99-3.825a.284.284 0 0 1 .478-.04z"></path>
</svg>
;
};

function BlitzIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={BlitzSvg} {...props} />
};

export default BlitzIcon;
