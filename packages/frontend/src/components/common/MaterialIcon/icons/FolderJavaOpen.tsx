import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderJavaOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ef5350)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #ffcdd2)" d="M14 26h16v2H14zm17-14H16v8a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4h3a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m-1 6h-2v-4h2Z"></path>
</svg>
;
};

function FolderJavaOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderJavaOpenSvg} {...props} />
};

export default FolderJavaOpenIcon;
