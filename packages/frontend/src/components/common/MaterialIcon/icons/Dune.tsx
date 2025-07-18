import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function DuneSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #f57c00)" d="m14 6-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22z"></path>
</svg>
;
};

function DuneIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={DuneSvg} {...props} />
};

export default DuneIcon;
