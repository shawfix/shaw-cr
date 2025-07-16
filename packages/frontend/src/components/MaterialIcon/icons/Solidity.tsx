import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function SoliditySvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <g fill="#0288d1">
    <path d="m5.747 14.046 6.254 8.61 6.252-8.61-6.254 3.807z"></path>
    <path d="M11.999 1.343 5.747 11.83l6.252 3.807 6.253-3.807z"></path>
  </g>
</svg>
;
};

function SolidityIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={SoliditySvg} {...props} />
};

export default SolidityIcon;
