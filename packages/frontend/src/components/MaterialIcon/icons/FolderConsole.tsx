import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderConsoleSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #8bc34a)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #dcedc8)" d="M26 14H16a4.533 4.533 0 0 0-4.498 3.971l-1.483 9.276A2.45 2.45 0 0 0 12.45 30a2.45 2.45 0 0 0 1.96-.98L17 26h8l2.59 3.02a2.45 2.45 0 0 0 1.96.98 2.45 2.45 0 0 0 2.43-2.753l-1.482-9.276A4.533 4.533 0 0 0 26 14m-1 2a1 1 0 1 1-1 1 1 1 0 0 1 1-1m-5 4h-2v2h-2v-2h-2v-2h2v-2h2v2h2Zm3 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1m2 2a1 1 0 1 1 1-1 1 1 0 0 1-1 1m2-2a1 1 0 1 1 1-1 1 1 0 0 1-1 1"></path>
</svg>
;
};

function FolderConsoleIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderConsoleSvg} {...props} />
};

export default FolderConsoleIcon;
