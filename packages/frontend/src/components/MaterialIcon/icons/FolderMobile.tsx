import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderMobileSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ff5252)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #ffcdd2)" d="M12 14v10a2 2 0 0 0 2 2h8v-2h-6V14h12v2h4v-2a2 2 0 0 0-2-2H14a2 2 0 0 0-2 2"></path>
  <path fill="var(--material-icon-color, #ffcdd2)" d="M24 19v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1m6 7h-4v-6h4Z"></path>
</svg>
;
};

function FolderMobileIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderMobileSvg} {...props} />
};

export default FolderMobileIcon;
