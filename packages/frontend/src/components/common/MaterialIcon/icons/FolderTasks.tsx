import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderTasksSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #5c6bc0)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #c5cae9)" d="M23.08 24 20 21.108l1.378-1.465 1.718 1.612L26.638 18 28 19.48z"></path>
  <path fill="var(--material-icon-color, #c5cae9)" d="M30 12v-2h-2v2h-8v-2h-2v2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2m0 14H18V16h12Z"></path>
</svg>
;
};

function FolderTasksIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderTasksSvg} {...props} />
};

export default FolderTasksIcon;
