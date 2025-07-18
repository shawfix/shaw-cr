import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderVscodeOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #42a5f5)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #bbdefb)" d="m28.145 10-7.903 7.267-4.417-3.329L14 15.001l4.353 3.998L14 23.001l1.825 1.065 4.417-3.329L28.145 28 32 26.127V11.874ZM28 14.78v8.441l-5.603-4.22Z"></path>
</svg>
;
};

function FolderVscodeOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderVscodeOpenSvg} {...props} />
};

export default FolderVscodeOpenIcon;
