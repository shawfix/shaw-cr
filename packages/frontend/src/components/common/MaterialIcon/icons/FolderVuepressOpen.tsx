import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderVuepressOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #41b883)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #e8f5e9)" d="M18.4 12a2.23 2.23 0 0 0-2.4 2v12a2.23 2.23 0 0 0 2.4 2h11.2a2.23 2.23 0 0 0 2.4-2V14a2.23 2.23 0 0 0-2.4-2Z"></path>
  <path fill="var(--material-icon-color, #41b883)" d="m18 16 6 10 6-9.952V16h-2.333l-3.632 6.026L20.42 16Z"></path>
  <path fill="var(--material-icon-color, #35495e)" d="m20.418 16 3.616 6.026L27.667 16h-2.188l-1.43 2.372L22.625 16Z"></path>
</svg>
;
};

function FolderVuepressOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderVuepressOpenSvg} {...props} />
};

export default FolderVuepressOpenIcon;
