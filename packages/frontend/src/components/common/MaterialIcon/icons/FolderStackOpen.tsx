import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderStackOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ffa726)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #ffe0b2)" d="M16 16.006h4v4h-4zm0 6h4v4h-4zm6-2h4v6h-4zm0-4h4v2h-4z"></path>
  <path fill="var(--material-icon-color, #ffe0b2)" d="M32 16.006v-2h-2v-1a1 1 0 0 0-1-1H13a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1h2v-2h-2v-4h2v-2h-2v-4Zm-4 12H14v-14h14Z"></path>
</svg>
;
};

function FolderStackOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderStackOpenSvg} {...props} />
};

export default FolderStackOpenIcon;
