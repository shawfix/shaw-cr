import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function SupabaseSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #66bb6a)" d="M29.92 12H16V2.85a1 1 0 0 0-1.78-.624L1.3 18.376A1 1 0 0 0 2.08 20H16v9.15a1 1 0 0 0 1.78.624l12.92-16.15A1 1 0 0 0 29.92 12"></path>
</svg>
;
};

function SupabaseIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={SupabaseSvg} {...props} />
};

export default SupabaseIcon;
