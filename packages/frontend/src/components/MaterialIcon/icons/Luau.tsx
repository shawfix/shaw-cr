import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function LuauSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="var(--material-icon-color, none)" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #03A9F4)" d="M22.495 6.331 6.33 2 2 18.164l16.164 4.33z"></path>
  <path fill="var(--material-icon-color, #FAFAFA)" d="M19.933 7.81 16.7 6.944l-.866 3.233 3.233.866z"></path>
</svg>
;
};

function LuauIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={LuauSvg} {...props} />
};

export default LuauIcon;
