import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderLessOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #0277bd)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #b3e5fc)" d="M20 21a1 1 0 0 0-1-1 1 1 0 0 0 1-1v-5h2v-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1h-1v2h1a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2v-2h-2Zm11-2a1 1 0 0 1-1-1v-4a2 2 0 0 0-2-2h-2v2h2v5a1 1 0 0 0 1 1 1 1 0 0 0-1 1v5h-2v2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h1v-2Z"></path>
</svg>
;
};

function FolderLessOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderLessOpenSvg} {...props} />
};

export default FolderLessOpenIcon;
