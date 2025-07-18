import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderAnsibleOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #616161)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #9e9e9e)" d="M32 21a9 9 0 1 1-9-9 9.043 9.043 0 0 1 9 9"></path>
  <path fill="var(--material-icon-color, #FAFAFA)" d="m27.929 24.628-4-10a1 1 0 0 0-.93-.628h-.006a1 1 0 0 0-.927.641L18 26h2l1.24-3.638 5.205 3.47a1 1 0 0 0 1.484-1.204m-5.954-4.18 1.043-2.71 1.858 4.644Z"></path>
</svg>
;
};

function FolderAnsibleOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderAnsibleOpenSvg} {...props} />
};

export default FolderAnsibleOpenIcon;
