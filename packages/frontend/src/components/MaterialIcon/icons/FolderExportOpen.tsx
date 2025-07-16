import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderExportOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ff8a65)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #EFEBE9)" fill-opacity=".949" d="M25 14a7 7 0 1 0 7 7 7 7 0 0 0-7-7m-5 8v-2h10v2Z"></path>
</svg>
;
};

function FolderExportOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderExportOpenSvg} {...props} />
};

export default FolderExportOpenIcon;
