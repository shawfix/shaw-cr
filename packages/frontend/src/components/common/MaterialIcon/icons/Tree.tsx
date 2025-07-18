import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function TreeSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #7cb342)" d="M4 4h10v6H4zm16 10h10v6H20zm0 8h10v6H20zm-4-4v-2h-6v-4H8v14h8v-2h-6v-6z"></path>
</svg>
;
};

function TreeIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={TreeSvg} {...props} />
};

export default TreeIcon;
