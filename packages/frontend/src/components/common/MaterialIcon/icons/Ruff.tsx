import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function RuffSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #43a047)" d="M26 16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4v24h10v-8h2v8h12V18h-6v-2Zm-8-2h-6v-2h6Z"></path>
</svg>
;
};

function RuffIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={RuffSvg} {...props} />
};

export default RuffIcon;
