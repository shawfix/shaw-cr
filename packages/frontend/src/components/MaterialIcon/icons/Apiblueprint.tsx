import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ApiblueprintSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <rect width="12" height="12" x="10" y="2" fill="#42a5f5" rx="6"></rect>
  <rect width="12" height="12" x="18" y="18" fill="#42a5f5" rx="6"></rect>
  <rect width="12" height="12" x="2" y="18" fill="#42a5f5" rx="6"></rect>
  <path fill="var(--material-icon-color, none)" stroke="#42a5f5" stroke-miterlimit="10" stroke-width="3" d="m16 8 8 16M16 8 8 24"></path>
</svg>
;
};

function ApiblueprintIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ApiblueprintSvg} {...props} />
};

export default ApiblueprintIcon;
