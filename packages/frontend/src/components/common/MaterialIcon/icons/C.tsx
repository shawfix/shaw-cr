import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function CSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #0288d1)" d="M19.563 22A5.57 5.57 0 0 1 14 16.437v-2.873A5.57 5.57 0 0 1 19.563 8H24V2h-4.437A11.563 11.563 0 0 0 8 13.563v2.873A11.564 11.564 0 0 0 19.563 28H24v-6Z"></path>
</svg>
;
};

function CIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={CSvg} {...props} />
};

export default CIcon;
