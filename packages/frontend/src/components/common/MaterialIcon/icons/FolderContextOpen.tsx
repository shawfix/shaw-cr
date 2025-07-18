import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderContextOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #00897b)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #b2dfdb)" d="M30 22v-2a2 2 0 0 0-2-2h-6v-2h2v-6h-6v6h2v2h-6a2 2 0 0 0-2 2v2h-2v6h6v-6h-2v-2h6v2h-2v6h6v-6h-2v-2h6v2h-2v6h6v-6Z"></path>
</svg>
;
};

function FolderContextOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderContextOpenSvg} {...props} />
};

export default FolderContextOpenIcon;
