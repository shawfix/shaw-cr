import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderWindowsSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #2196f3)" d="M12.667 6h-8A2.657 2.657 0 0 0 2 8.648v16.019a2.68 2.68 0 0 0 2.667 2.666H26a2.68 2.68 0 0 0 2.667-2.666V11.333A2.667 2.667 0 0 0 26 8.667H15.333z"></path>
  <path fill="var(--material-icon-color, #bbdefb)" d="M14 12h8v8h-8zm10 0h8v8h-8zm0 10h8v8h-8zm-10 0h8v8h-8z"></path>
</svg>
;
};

function FolderWindowsIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderWindowsSvg} {...props} />
};

export default FolderWindowsIcon;
