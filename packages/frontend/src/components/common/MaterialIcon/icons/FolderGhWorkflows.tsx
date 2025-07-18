import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderGhWorkflowsSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #546e7a)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #eceff1)" d="M24 22v2h-2a2 2 0 0 1-2-2v-4h2v-6h-6v6h2v4a4.004 4.004 0 0 0 4 4h2v2h6v-6Zm-6-6v-2h2v2Zm10 10h-2v-2h2Z"></path>
</svg>
;
};

function FolderGhWorkflowsIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderGhWorkflowsSvg} {...props} />
};

export default FolderGhWorkflowsIcon;
