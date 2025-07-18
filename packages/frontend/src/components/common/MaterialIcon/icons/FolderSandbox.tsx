import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderSandboxSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #1e88e5)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #bbdefb)" d="M21 20h-6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1m7-8a4 4 0 1 0 4 4 4 4 0 0 0-4-4m.707 17.707 3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414 0m-11.581-7.193-2.999 6A1 1 0 0 0 15.001 30H21a1 1 0 0 0 .874-1.486l-2.999-6a1 1 0 0 0-1.748 0"></path>
</svg>
;
};

function FolderSandboxIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderSandboxSvg} {...props} />
};

export default FolderSandboxIcon;
