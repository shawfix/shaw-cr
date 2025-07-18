import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderVmSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #039be5)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #b3e5fc)" d="M30 26v-9.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5V26h-1.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5Zm-12-8h10v6H18Z"></path>
</svg>
;
};

function FolderVmIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderVmSvg} {...props} />
};

export default FolderVmIcon;
