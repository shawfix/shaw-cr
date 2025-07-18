import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderWebpackSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #03a9f4)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #FAFAFA)" d="m30.992 14.263-7-4a2 2 0 0 0-1.984 0l-7 4A2 2 0 0 0 14 16v8.65a2 2 0 0 0 1.025 1.746l6 3.35A2 2 0 0 0 23 29.73a2 2 0 0 0 1.975.016l6-3.35A2 2 0 0 0 32 24.65V16a2 2 0 0 0-1.008-1.737"></path>
  <path fill="var(--material-icon-color, #0277bd)" d="M30 24.65 24 28v-6l6-3.35zM23 12l-7 4 7 4 7-4zm-7 12.65L22 28v-6l-6-3.35z"></path>
</svg>
;
};

function FolderWebpackIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderWebpackSvg} {...props} />
};

export default FolderWebpackIcon;
