import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderRobotOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ff5252)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #ffcdd2)" d="M10.5 26H12v-6h-1.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5M30 20v6h1.5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5Zm-8.5-8h-1a.5.5 0 0 0-.5.5V16h-5.5a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5H22v-3.5a.5.5 0 0 0-.5-.5M18 18a2 2 0 1 1-2 2 2 2 0 0 1 2-2m8 8H16v-2h10Zm-2-8a2 2 0 1 1-2 2 2 2 0 0 1 2-2"></path>
</svg>
;
};

function FolderRobotOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderRobotOpenSvg} {...props} />
};

export default FolderRobotOpenIcon;
