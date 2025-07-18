import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function CmakeSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #1e88e5)" d="M11.94 2.984 2.928 21.017l9.875-8.47z"></path>
  <path fill="var(--material-icon-color, #e53935)" d="m11.958 2.982.002.29 1.312 14.499-.002.006.023.26 7.363 2.978h.415l-.158-.31-.114-.228h-.001l-8.84-17.494z"></path>
  <path fill="var(--material-icon-color, #7cb342)" d="m8.558 16.13-5.627 4.884h17.743v-.016z"></path>
</svg>
;
};

function CmakeIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={CmakeSvg} {...props} />
};

export default CmakeIcon;
