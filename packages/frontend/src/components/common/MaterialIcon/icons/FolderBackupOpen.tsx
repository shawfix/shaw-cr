import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderBackupOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #8d6e63)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #d7ccc8)" d="M25.375 24.781 20 20.48V14h2v5.52l4.625 3.699z"></path>
  <path fill="var(--material-icon-color, #d7ccc8)" d="M22 30a10 10 0 1 1 10-10 10.01 10.01 0 0 1-10 10m0-18a8 8 0 1 0 8 8 8.01 8.01 0 0 0-8-8"></path>
</svg>
;
};

function FolderBackupOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderBackupOpenSvg} {...props} />
};

export default FolderBackupOpenIcon;
