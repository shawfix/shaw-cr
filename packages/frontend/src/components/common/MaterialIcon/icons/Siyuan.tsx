import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function SiyuanSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #e53935)" d="M2 11.976 10 4v16l-8 8Z"></path>
  <path fill="var(--material-icon-color, #455a64)" d="M30 11.976 22 4v15.99L30 28ZM10 4l6 6v16l-6-6Z"></path>
  <path fill="var(--material-icon-color, #e53935)" d="m22 4-6 6v16l6-6.01Z"></path>
</svg>
;
};

function SiyuanIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={SiyuanSvg} {...props} />
};

export default SiyuanIcon;
