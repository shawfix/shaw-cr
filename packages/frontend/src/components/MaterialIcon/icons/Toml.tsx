import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function TomlSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #cfd8dc)" d="M4 6V4h8v2H9v7H7V6z"></path>
  <path fill="var(--material-icon-color, #ef5350)" d="M4 1v1H2v12h2v1H1V1zm8 0v1h2v12h-2v1h3V1z"></path>
</svg>
;
};

function TomlIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={TomlSvg} {...props} />
};

export default TomlIcon;
