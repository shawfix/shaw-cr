import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderWindowsOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #2196f3)" d="M24.667 27.333h-20A2.667 2.667 0 0 1 2 24.667v-16A2.657 2.657 0 0 1 4.648 6h8.019l2.666 2.667h9.334a2.68 2.68 0 0 1 2.666 2.666H4.667v13.334L7.52 14h22.76l-3.04 11.333a2.67 2.67 0 0 1-2.573 2"></path>
  <path fill="var(--material-icon-color, #bbdefb)" d="M14 12h8v8h-8zm10 0h8v8h-8zm0 10h8v8h-8zm-10 0h8v8h-8z"></path>
</svg>
;
};

function FolderWindowsOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderWindowsOpenSvg} {...props} />
};

export default FolderWindowsOpenIcon;
