import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function WindicssSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="var(--material-icon-color, none)" viewBox="0 0 32 32" width="1em" height="1em">
  <path stroke="#42a5f5" stroke-miterlimit="3.339" stroke-width="4" d="M22 12a4 4 0 1 1 4 4H2m14 10a4 4 0 1 0 4-4H10M8 6a4 4 0 1 1 4 4H2"></path>
  <path fill="var(--material-icon-color, #42a5f5)" d="M2 20h4v4H2z"></path>
</svg>
;
};

function WindicssIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={WindicssSvg} {...props} />
};

export default WindicssIcon;
