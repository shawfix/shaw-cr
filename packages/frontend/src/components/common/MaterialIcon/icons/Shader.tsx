import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ShaderSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ab47bc)" d="M10.469 17.102a4.083 4.083 0 1 1-8.166 0 4.083 4.083 0 0 1 8.166 0m5.069-9.666a4.083 4.083 0 1 0-5.446 3.296c3.13 1.231 3.867 2.474 3.475 5.828a4.083 4.083 0 1 0 5.446-3.295c-3.13-1.232-3.869-2.475-3.475-5.829"></path>
</svg>
;
};

function ShaderIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ShaderSvg} {...props} />
};

export default ShaderIcon;
