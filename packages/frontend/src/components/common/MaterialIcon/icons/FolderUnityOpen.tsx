import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderUnityOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #2196f3)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #bbdefb)" d="M23 15.25 18.5 13l3-1.5v-3L14 13v7.75l3-1.5v-4.5L21.5 17v6.75L17 22l-3 1.5 9 4.5 9-4.5-3-1.5-4.5 2.25V17.5l4.5-2.25v4l3 1.5V13l-7.5-4.5v3l3 1.5z"></path>
</svg>
;
};

function FolderUnityOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderUnityOpenSvg} {...props} />
};

export default FolderUnityOpenIcon;
