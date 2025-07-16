import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function SimulinkSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.233 4.233" width="1em" height="1em">
  <path fill="var(--material-icon-color, #9e9e9e)" d="M.53 1.323v.264h2.38v.794h.265V1.323z"></path>
  <path fill="var(--material-icon-color, #ff6e40)" d="M2.381 2.381h1.323v1.323H2.381z"></path>
  <path fill="var(--material-icon-color, #64b5f6)" d="m2.381 1.455-1.587.926V.53z"></path>
</svg>
;
};

function SimulinkIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={SimulinkSvg} {...props} />
};

export default SimulinkIcon;
