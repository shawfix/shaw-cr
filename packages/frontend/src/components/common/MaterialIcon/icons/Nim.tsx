import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function NimSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ffca28)" d="M6 24h20v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zM30 6l-9 9-5-11-5 11-9-9 4 14h20z"></path>
</svg>
;
};

function NimIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={NimSvg} {...props} />
};

export default NimIcon;
