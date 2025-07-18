import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderPhpOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #1e88e5)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #bbdefb)" d="M12 18H8.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V24h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2m0 3.5a.5.5 0 0 1-.5.5H10v-2h1.5a.5.5 0 0 1 .5.5ZM28 18h-3.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V24h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2m0 3.5a.5.5 0 0 1-.5.5H26v-2h1.5a.5.5 0 0 1 .5.5ZM20 18h-2v-3.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V20h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V20a2 2 0 0 0-2-2"></path>
</svg>
;
};

function FolderPhpOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderPhpOpenSvg} {...props} />
};

export default FolderPhpOpenIcon;
