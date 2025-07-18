import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderJinjaOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #e0e0e0)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #424242)" d="M32 17v-3a41.3 41.3 0 0 1-9 1 41.3 41.3 0 0 1-9-1v3a36 36 0 0 0 3.938.681L17.728 20H14v2h3.545L17 28h3v-6h6v6h3l-.545-6H32v-2h-3.727l-.211-2.319A36 36 0 0 0 32 17m-6 3h-2v-2h-2v2h-2v-2.116c.938.07 1.945.116 3 .116s2.062-.046 3-.116Z"></path>
</svg>
;
};

function FolderJinjaOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderJinjaOpenSvg} {...props} />
};

export default FolderJinjaOpenIcon;
