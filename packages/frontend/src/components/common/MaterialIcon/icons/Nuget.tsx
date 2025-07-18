import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function NugetSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <circle cx="5" cy="5" r="3" fill="#0288d1"></circle>
  <path fill="var(--material-icon-color, #0288d1)" d="M8 14v10a6 6 0 0 0 6 6h10a6 6 0 0 0 6-6V14a6 6 0 0 0-6-6H14a6 6 0 0 0-6 6m7 4a3 3 0 1 1 3-3 3 3 0 0 1-3 3m7 8a4 4 0 1 1 4-4 4 4 0 0 1-4 4"></path>
</svg>
;
};

function NugetIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={NugetSvg} {...props} />
};

export default NugetIcon;
