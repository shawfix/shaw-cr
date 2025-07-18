import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function AbapSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #0288d1)" d="M2 10v12h14l14-12"></path>
</svg>
;
};

function AbapIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={AbapSvg} {...props} />
};

export default AbapIcon;
