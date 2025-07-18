import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderGlobalOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #5c6bc0)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #c5cae9)" d="M22 10a10 10 0 1 0 10 10 10 10 0 0 0-10-10m8 10a8 8 0 0 1-.263 2H26l-2-2v-2h-4v-4h4v2h2v-2.918A8 8 0 0 1 30 20m-16 0a8 8 0 0 1 .123-1.347L18 20h4l2 2-2 2v4a8.01 8.01 0 0 1-8-8"></path>
  <path fill="var(--material-icon-color, #c5cae9)" d="M26 17h2v1h-2z"></path>
</svg>
;
};

function FolderGlobalOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderGlobalOpenSvg} {...props} />
};

export default FolderGlobalOpenIcon;
