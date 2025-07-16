import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderClientOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #039be5)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #b3e5fc)" d="M15 12a1 1 0 0 0-1 1v10.994h-4v4h12v-4h-6V14h14v-2.006Z"></path>
  <path fill="var(--material-icon-color, #b3e5fc)" d="M31 16h-6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V17a1 1 0 0 0-1-1m-1 8h-4v-6h4Z"></path>
</svg>
;
};

function FolderClientOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderClientOpenSvg} {...props} />
};

export default FolderClientOpenIcon;
