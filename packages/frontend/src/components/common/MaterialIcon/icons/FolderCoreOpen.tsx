import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderCoreOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #1976d2)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #bbdefb)" d="M18 14v10h10V14Zm8 8h-6v-6h6ZM14 12h2v-2a2 2 0 0 0-2 2m4-2h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm4 0v2h2a2 2 0 0 0-2-2m0 4h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm0 6a2 2 0 0 0 2-2h-2Zm-4-2h2v2h-2zm-4 0h2v2h-2zm-4 0h2v2h-2zm-2 2v-2h-2a2 2 0 0 0 2 2m-2-6h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2z"></path>
</svg>
;
};

function FolderCoreOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderCoreOpenSvg} {...props} />
};

export default FolderCoreOpenIcon;
