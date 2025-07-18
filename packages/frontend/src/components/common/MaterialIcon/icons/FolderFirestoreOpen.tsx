import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderFirestoreOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #2196f3)" fill-rule="nonzero" d="M28.967 12H9.442c-.859 0-1.627.553-1.898 1.368L4 24V10h24c0-1.097-.903-2-2-2H15.124c-.468 0-.921-.164-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4c-1.097 0-2 .903-2 2v16c0 1.097.903 2 2 2h22l4.805-11.212c.107-.249.162-.517.162-.788 0-1.097-.903-2-2-2"></path>
  <path fill="var(--material-icon-color, #bbdefb)" d="m24 10-8 4v4l8-4 8 4v-4z"></path>
  <path fill="var(--material-icon-color, #bbdefb)" d="M16 20v4l8-4 8 4v-4l-8-4z"></path>
  <path fill="var(--material-icon-color, #bbdefb)" d="m24 24 3-1 4 2-7 3z"></path>
</svg>
;
};

function FolderFirestoreOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderFirestoreOpenSvg} {...props} />
};

export default FolderFirestoreOpenIcon;
