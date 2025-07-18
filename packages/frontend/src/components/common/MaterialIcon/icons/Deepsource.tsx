import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function DeepsourceSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #1de9b6)" d="M2 2h9a1 1 0 0 1 1 .992A1 1 0 0 1 11 4H2z"></path>
  <path fill="var(--material-icon-color, #f44336)" d="M2 12h11a1 1 0 0 1 1 1 1 1 0 0 1-1 1H2z"></path>
  <path fill="var(--material-icon-color, #ffb300)" d="M2 9h7a1 1 0 0 0 1-1 1 1 0 0 0-1-1H2z"></path>
</svg>
;
};

function DeepsourceIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={DeepsourceSvg} {...props} />
};

export default DeepsourceIcon;
