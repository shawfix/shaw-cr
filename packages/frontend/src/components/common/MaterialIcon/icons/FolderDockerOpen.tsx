import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderDockerOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #039be5)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #b3e5fc)" d="M14 16h4v4h-4zm-6 0h4v4H8zm12 0h4v4h-4zm0-6h4v4h-4z"></path>
  <path fill="var(--material-icon-color, #b3e5fc)" d="M31.667 19.81a3.65 3.65 0 0 0-3.067-.377 4.6 4.6 0 0 0-1.667-2.945l-.333-.302-.267.378a4.44 4.44 0 0 0-.667 2.793 5 5 0 0 0 .233 1.101l-.62 1.283A5.1 5.1 0 0 1 23.6 22H6a15.3 15.3 0 0 0 .865 4.757l.267.528v.076a8.22 8.22 0 0 0 7.6 4.38c6 0 10.934-2.945 13.268-9.288a3.605 3.605 0 0 0 3.8-2.039l.2-.377ZM12 28a2 2 0 1 1 2-2 2 2 0 0 1-2 2"></path>
</svg>
;
};

function FolderDockerOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderDockerOpenSvg} {...props} />
};

export default FolderDockerOpenIcon;
