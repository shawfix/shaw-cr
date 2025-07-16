import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderInterfaceSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #1976d2)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #bbdefb)" d="M16 12v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2H18a2 2 0 0 0-2 2m14 14H18v-4h12Zm0-6H18v-4h12Z"></path>
</svg>
;
};

function FolderInterfaceIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderInterfaceSvg} {...props} />
};

export default FolderInterfaceIcon;
