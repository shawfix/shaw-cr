import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function PayloadSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #CFD8DC)" d="m11.617 2 9.163 5.508v10.455l-6.9 3.991V11.5L4.706 6zm-.703 11.216v8.159L4 17.215z"></path>
</svg>
;
};

function PayloadIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={PayloadSvg} {...props} />
};

export default PayloadIcon;
