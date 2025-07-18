import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderIosOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #78909c)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #cfd8dc)" d="M12 18h2v10h-2zm0-4h2v2h-2zm4 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V15a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1m6 11h-4V16h4Zm10-10v-2h-5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3v4h-4v2h5a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-3v-4Z"></path>
</svg>
;
};

function FolderIosOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderIosOpenSvg} {...props} />
};

export default FolderIosOpenIcon;
