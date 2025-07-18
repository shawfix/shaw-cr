import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderClineSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #42a5f5)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #bbdefb)" d="M23 12a2 2 0 0 0-2 2h-1c-2.216 0-4 1.784-4 4l-2 3 2 3c0 2.216 1.784 4 4 4h6c2.216 0 4-1.784 4-4l2-3-2-3c0-2.216-1.784-4-4-4h-1a2 2 0 0 0-2-2m-2 6c.554 0 1 .446 1 1v4c0 .554-.446 1-1 1s-1-.446-1-1v-4c0-.554.446-1 1-1m4 0c.554 0 1 .446 1 1v4c0 .554-.446 1-1 1s-1-.446-1-1v-4c0-.554.446-1 1-1"></path>
</svg>
;
};

function FolderClineIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderClineSvg} {...props} />
};

export default FolderClineIcon;
