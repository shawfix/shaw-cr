import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ZigSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #f9a825)" d="M2 8h6v4H2zm8 0h12v4H10zm0 12h12v4H10zm14 0h2v4h-2zM8 20l-3 4H2V12h4v8zm14-8h-6l-6 8h6z"></path>
  <path fill="var(--material-icon-color, #f9a825)" d="M16 20h-6l-6 8m12-16h6l6-8m2 4v16h-4V12h-2l3-4z"></path>
</svg>
;
};

function ZigIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ZigSvg} {...props} />
};

export default ZigIcon;
