import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderNetlifyOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #26a69a)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #a7ffeb)" d="M22 16h-4v6h2v-4h1.5a.5.5 0 0 1 .5.5V22h2v-4a2 2 0 0 0-2-2"></path>
  <path fill="var(--material-icon-color, #a7ffeb)" d="m13 12.172 1.414-1.414 2.828 2.828L15.828 15zM15.828 23l1.414 1.414-2.828 2.828L13 25.828z"></path>
  <rect width="6" height="2" x="26" y="18" fill="#a7ffeb" rx=".5"></rect>
  <rect width="2" height="6" x="20" y="8" fill="#a7ffeb" rx=".5"></rect>
  <rect width="6" height="2" x="10" y="18" fill="#a7ffeb" rx=".5"></rect>
  <rect width="2" height="6" x="20" y="24" fill="#a7ffeb" rx=".5"></rect>
</svg>
;
};

function FolderNetlifyOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderNetlifyOpenSvg} {...props} />
};

export default FolderNetlifyOpenIcon;
