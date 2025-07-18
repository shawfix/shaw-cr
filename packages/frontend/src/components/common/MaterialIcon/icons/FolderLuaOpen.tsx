import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderLuaOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #42a5f5)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #b3e5fc)" d="M19.703 14.594a7.703 7.703 0 1 0 7.703 7.703 7.703 7.703 0 0 0-7.703-7.703M21 24a3 3 0 1 1 3-3 3 3 0 0 1-3 3"></path>
  <circle cx="29" cy="13" r="3" fill="#b3e5fc"></circle>
</svg>
;
};

function FolderLuaOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderLuaOpenSvg} {...props} />
};

export default FolderLuaOpenIcon;
