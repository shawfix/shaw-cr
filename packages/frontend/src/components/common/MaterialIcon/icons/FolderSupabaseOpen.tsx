import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderSupabaseOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #66bb6a)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #c8e6c9)" d="M30 18h-6v-6.499a.5.5 0 0 0-.9-.3l-6.3 8.4a1.5 1.5 0 0 0 1.2 2.4h6V28.5a.5.5 0 0 0 .9.3l6.3-8.4A1.5 1.5 0 0 0 30 18"></path>
</svg>
;
};

function FolderSupabaseOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderSupabaseOpenSvg} {...props} />
};

export default FolderSupabaseOpenIcon;
