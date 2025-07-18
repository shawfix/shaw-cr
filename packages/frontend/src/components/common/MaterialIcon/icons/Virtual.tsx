import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function VirtualSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #039be5)" d="M28 24V6H4v18H2v2h28v-2Zm-8 0h-8v-2h8Zm6-4H6V8h20Z"></path>
</svg>
;
};

function VirtualIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={VirtualSvg} {...props} />
};

export default VirtualIcon;
