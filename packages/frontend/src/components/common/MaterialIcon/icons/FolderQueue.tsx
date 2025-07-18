import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderQueueSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #039be5)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #b3e5fc)" d="M24 16v-2h-3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3v-2h-2v-8Zm8-2v-2h-5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-2h-4V14Zm-16 2h2v8h-2z"></path>
</svg>
;
};

function FolderQueueIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderQueueSvg} {...props} />
};

export default FolderQueueIcon;
