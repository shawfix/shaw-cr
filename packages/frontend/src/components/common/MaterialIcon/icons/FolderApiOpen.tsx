import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderApiOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #fbc02d)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #fffde7)" d="M20 18h-4v2h6v-6h-2zm8 0v-4h-2v6h6v-2zm-12 8h4v4h2v-6h-6zm10 0v4h2v-4h4v-2h-6z"></path>
</svg>
;
};

function FolderApiOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderApiOpenSvg} {...props} />
};

export default FolderApiOpenIcon;
