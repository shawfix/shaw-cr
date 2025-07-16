import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function VercelLightSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #455a64)" d="m16 6 12 20H4Z"></path>
</svg>
;
};

function VercelLightIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={VercelLightSvg} {...props} />
};

export default VercelLightIcon;
