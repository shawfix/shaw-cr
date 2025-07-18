import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderMoonOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #7e57c2)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #d1c4e9)" d="M32 14a3.995 3.995 0 0 0-7.64-1.64A7.7 7.7 0 0 0 22 12a8 8 0 1 0 8 8 7.7 7.7 0 0 0-.36-2.36A3.99 3.99 0 0 0 32 14m-8 8a4 4 0 0 1 0-8 4 4 0 0 0 4 4 4 4 0 0 1-4 4"></path>
</svg>
;
};

function FolderMoonOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderMoonOpenSvg} {...props} />
};

export default FolderMoonOpenIcon;
