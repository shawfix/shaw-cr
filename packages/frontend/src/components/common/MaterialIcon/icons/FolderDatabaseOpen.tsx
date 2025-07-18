import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderDatabaseOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ffca28)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #ffecb3)" d="M24 26c-4.418 0-8-1.79-8-4v4c0 2.21 3.582 4 8 4s8-1.79 8-4v-4c0 2.21-3.582 4-8 4"></path>
  <path fill="var(--material-icon-color, #ffecb3)" d="M24 20c-4.418 0-8-1.79-8-4v4c0 2.21 3.582 4 8 4s8-1.79 8-4v-4c0 2.21-3.582 4-8 4"></path>
  <ellipse cx="24" cy="14" fill="#ffecb3" rx="8" ry="4"></ellipse>
</svg>
;
};

function FolderDatabaseOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderDatabaseOpenSvg} {...props} />
};

export default FolderDatabaseOpenIcon;
