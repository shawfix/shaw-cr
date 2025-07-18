import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderRepositoryOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #43a047)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #c8e6c9)" d="M20 10a2 2 0 0 0-1.6.8l-1.6 2.134a4 4 0 0 0-.8 2.398V26a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V15.332a4 4 0 0 0-.8-2.398L29.6 10.8A2 2 0 0 0 28 10zm0 2h8l1.5 2h-11zm2 4h4v4h4l-6 6-6-6h4z"></path>
</svg>
;
};

function FolderRepositoryOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderRepositoryOpenSvg} {...props} />
};

export default FolderRepositoryOpenIcon;
