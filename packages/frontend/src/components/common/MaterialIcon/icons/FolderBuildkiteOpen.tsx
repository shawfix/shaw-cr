import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderBuildkiteOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #4caf50)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #c8e6c9)" d="m20 24-6-2v-6l6 2zm10-2h-4v-6l6 4z"></path>
  <path fill="var(--material-icon-color, #a5d6a7)" d="m20 24 6-2v-6l-6 2zm6 4 6-2v-6l-6 2z"></path>
</svg>
;
};

function FolderBuildkiteOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderBuildkiteOpenSvg} {...props} />
};

export default FolderBuildkiteOpenIcon;
