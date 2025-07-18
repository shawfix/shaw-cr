import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderRustOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #FF7043)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #ffccbc)" d="M30 24v1a1 1 0 0 1-2 0v-1a2 2 0 0 0-2-2 3 3 0 0 0 2.996-3.16A3.115 3.114 0 0 0 25.83 16H14v2h2v8h-2v2h8v-2h-2v-2h4c.82.819.297 2.308 1.179 3.37a1.89 1.89 0 0 0 1.46.63H32v-4zm-6-4h-4v-2h4a1 1 0 0 1 0 2"></path>
</svg>
;
};

function FolderRustOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderRustOpenSvg} {...props} />
};

export default FolderRustOpenIcon;
