import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderEventOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #fbc02d)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #fff9c4)" d="M24 30a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2m6-8v-5a5 5 0 0 0-4-4.9V12a2 2 0 0 0-4 0v.1a5 5 0 0 0-4 4.9v5l-2 2v2h16v-2Z"></path>
</svg>
;
};

function FolderEventOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderEventOpenSvg} {...props} />
};

export default FolderEventOpenIcon;
