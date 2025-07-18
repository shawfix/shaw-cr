import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ArduinoSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #0097A7)" d="M2 14h10v2H2zm22-4h2v10h-2z"></path>
  <path fill="var(--material-icon-color, #0097A7)" d="M20 14h10v2H20z"></path>
  <path fill="var(--material-icon-color, none)" stroke="#0097A7" stroke-width="2" d="M2 5h4a10 10 0 0 1 10 10 10 10 0 0 0 10 10h4"></path>
  <path fill="var(--material-icon-color, #0097A7)" d="M11.644 22A8.95 8.95 0 0 1 6 24H2v2h4a10.98 10.98 0 0 0 8.479-4ZM26 4a10.98 10.98 0 0 0-8.479 4h2.835A8.95 8.95 0 0 1 26 6h4V4Z"></path>
</svg>
;
};

function ArduinoIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ArduinoSvg} {...props} />
};

export default ArduinoIcon;
