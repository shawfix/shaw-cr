import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderLuaSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #42a5f5)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #b3e5fc)" d="M19.703 14.594a7.703 7.703 0 1 0 7.703 7.703 7.703 7.703 0 0 0-7.703-7.703M21 24a3 3 0 1 1 3-3 3 3 0 0 1-3 3"></path>
  <circle cx="29" cy="13" r="3" fill="#b3e5fc"></circle>
</svg>
;
};

function FolderLuaIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderLuaSvg} {...props} />
};

export default FolderLuaIcon;
