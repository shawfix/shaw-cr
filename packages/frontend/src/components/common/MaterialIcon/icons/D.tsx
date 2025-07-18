import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function DSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #f44336)" d="M21.805 8.063a5 5 0 0 0-3.502.727A10.95 10.95 0 0 0 11 6H2.5a.5.5 0 0 0-.5.5v21a.5.5 0 0 0 .5.5H11a10.995 10.995 0 0 0 10.954-10.096 4.998 4.998 0 0 0-.149-9.841M11 24H6V10h5a7 7 0 0 1 0 14"></path>
  <circle cx="28" cy="7" r="1.5" fill="#f44336"></circle>
</svg>
;
};

function DIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={DSvg} {...props} />
};

export default DIcon;
