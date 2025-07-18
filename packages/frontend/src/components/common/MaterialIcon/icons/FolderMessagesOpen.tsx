import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderMessagesOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ff9800)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #fff9c4)" d="M31 12H15a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3v3a1 1 0 0 0 1 1h.697a1 1 0 0 0 .555-.168L26 26h5a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1m-15 6h8v2h-8Zm10 6H16v-2h10Zm4-8H16v-2h14Z"></path>
</svg>
;
};

function FolderMessagesOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderMessagesOpenSvg} {...props} />
};

export default FolderMessagesOpenIcon;
