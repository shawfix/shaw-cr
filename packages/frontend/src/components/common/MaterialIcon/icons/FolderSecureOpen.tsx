import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderSecureOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #f9a825)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #fff9c4)" d="M28 16v-3.828a4.116 4.116 0 0 0-3.607-4.153A4 4 0 0 0 20 12v4h-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2Zm-4 8a2 2 0 1 1 2-2 2 2 0 0 1-2 2m2-8h-4v-4a2 2 0 0 1 4 0Z"></path>
</svg>
;
};

function FolderSecureOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderSecureOpenSvg} {...props} />
};

export default FolderSecureOpenIcon;
