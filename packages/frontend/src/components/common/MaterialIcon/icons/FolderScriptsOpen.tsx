import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderScriptsOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #546e7a)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #cfd8dc)" d="M28 12h-6a4 4 0 0 0-4 4v8h2v-8h8v9.893a2.074 2.074 0 0 1-1.664 2.08A2 2 0 0 1 24 26h-8a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V16h2a4 4 0 0 0-4-4"></path>
</svg>
;
};

function FolderScriptsOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderScriptsOpenSvg} {...props} />
};

export default FolderScriptsOpenIcon;
