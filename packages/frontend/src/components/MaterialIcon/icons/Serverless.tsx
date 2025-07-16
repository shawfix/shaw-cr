import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ServerlessSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ef5350)" d="M12.897 6H2v4h9.613zm4.201 0-1.284 4H30V6zm-2.568 8-1.283 4H30v-4zm-4.2 0H2v4h7.046zm1.633 8-1.283 4H30v-4zm-4.201 0H2v4h4.479z"></path>
</svg>
;
};

function ServerlessIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ServerlessSvg} {...props} />
};

export default ServerlessIcon;
