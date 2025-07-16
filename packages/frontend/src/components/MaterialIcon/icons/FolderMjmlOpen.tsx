import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderMjmlOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ff5722)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <rect width="12" height="4" x="14" y="24" fill="#ffccbc" rx="2"></rect>
  <rect width="12" height="4" x="20" y="18" fill="#ffccbc" rx="2"></rect>
  <rect width="12" height="4" x="14" y="12" fill="#ffccbc" rx="2"></rect>
  <circle cx="30" cy="26" r="2" fill="#ffccbc"></circle>
  <circle cx="16" cy="20" r="2" fill="#ffccbc"></circle>
  <circle cx="30" cy="14" r="2" fill="#ffccbc"></circle>
</svg>
;
};

function FolderMjmlOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderMjmlOpenSvg} {...props} />
};

export default FolderMjmlOpenIcon;
