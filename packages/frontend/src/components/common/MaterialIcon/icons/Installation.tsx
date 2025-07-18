import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function InstallationSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ff5722)" d="M12 7h-2V2H6v5H4l4 4zm-9 5.5V14h10v-1.5z"></path>
</svg>
;
};

function InstallationIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={InstallationSvg} {...props} />
};

export default InstallationIcon;
