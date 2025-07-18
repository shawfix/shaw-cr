import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderPrivateOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ff5252)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #ffcdd2)" d="M24 14a8 8 0 1 0 8 8 8 8 0 0 0-8-8m6 8a5.96 5.96 0 0 1-1.115 3.471l-8.356-8.356A5.99 5.99 0 0 1 30 22m-12 0a5.96 5.96 0 0 1 1.115-3.471l8.356 8.356A5.99 5.99 0 0 1 18 22"></path>
</svg>
;
};

function FolderPrivateOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderPrivateOpenSvg} {...props} />
};

export default FolderPrivateOpenIcon;
