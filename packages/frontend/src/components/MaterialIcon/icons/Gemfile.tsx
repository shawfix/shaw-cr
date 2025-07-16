import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function GemfileSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #e53935)" d="M21.184 10.016V10H10.881l.016.033-.016-.017L8 14l8.032 10L24 14z"></path>
  <path fill="var(--material-icon-color, #e53935)" d="m16 3.455 11 6.286v12.518l-11 6.286-11-6.286V9.741zM16 0 2 8v16l14 8 14-8V8z"></path>
</svg>
;
};

function GemfileIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={GemfileSvg} {...props} />
};

export default GemfileIcon;
