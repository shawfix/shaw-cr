import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderVueOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #009688)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #41b883)" d="m12 12 10 16 10-15.923V12h-3.889l-6.053 9.641-6.026-9.64Z"></path>
  <path fill="var(--material-icon-color, #35495e)" d="m16.03 12 6.027 9.642L28.11 12h-3.647l-2.383 3.795L19.708 12Z"></path>
</svg>
;
};

function FolderVueOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderVueOpenSvg} {...props} />
};

export default FolderVueOpenIcon;
