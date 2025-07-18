import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderContainerOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #0288d1)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #b3e5fc)" d="m31.532 14.153-8.085-4.048a1 1 0 0 0-.894 0l-8.085 4.048A1 1 0 0 0 14 15v10a1 1 0 0 0 .553.895l8.046 4.01a.9.9 0 0 0 .802 0l8.046-4.01A1 1 0 0 0 32 25V15a1 1 0 0 0-.468-.847M22 27.382l-6-3v-7.79l6 2.887Zm1-9.64-5.73-2.759L23 12.118l5.73 2.865Zm7 6.64-6 3v-7.903l6-2.888Z"></path>
</svg>
;
};

function FolderContainerOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderContainerOpenSvg} {...props} />
};

export default FolderContainerOpenIcon;
