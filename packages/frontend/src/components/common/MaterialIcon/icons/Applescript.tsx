import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ApplescriptSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #78909c)" d="M25.425 26.498c-1.162 1.736-2.394 3.43-4.27 3.458-1.875.042-2.477-1.106-4.605-1.106-2.142 0-2.8 1.078-4.578 1.148-1.834.07-3.22-1.848-4.396-3.542C5.183 23 3.35 16.63 5.813 12.346a6.84 6.84 0 0 1 5.767-3.514c1.792-.028 3.5 1.217 4.606 1.217 1.092 0 3.164-1.497 5.334-1.273a6.5 6.5 0 0 1 5.095 2.771 6.38 6.38 0 0 0-3.01 5.334 6.18 6.18 0 0 0 3.752 5.656 15.5 15.5 0 0 1-1.932 3.961M17.432 4.1A6.36 6.36 0 0 1 21.548 2a6.13 6.13 0 0 1-1.456 4.466 5.11 5.11 0 0 1-4.13 1.988 5.98 5.98 0 0 1 1.47-4.354"></path>
</svg>
;
};

function ApplescriptIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ApplescriptSvg} {...props} />
};

export default ApplescriptIcon;
