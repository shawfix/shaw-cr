import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function HclLightSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #455a64)" d="M18 1.2V14h-4v-4l-4 2v16.37l4 2.43V18h4v4l4-2V3.63z"></path>
  <path fill="var(--material-icon-color, #455a64)" d="M14 1.2 2 8.49v15.02l4 2.43v-15.2l8-4.86zm12 4.86v15.2l-8 4.86v4.68l12-7.29V8.49z"></path>
</svg>
;
};

function HclLightIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={HclLightSvg} {...props} />
};

export default HclLightIcon;
