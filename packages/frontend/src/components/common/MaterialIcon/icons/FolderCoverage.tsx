import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderCoverageSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #26a69a)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #b2dfdb)" d="m23.444 23.265-3.11-3.156 1.095-1.112 2.015 2.035 5.127-5.2 1.096 1.12M25 10l-7 4v4.53A9.8 9.8 0 0 0 25 28a9.8 9.8 0 0 0 7-9.47V14Z"></path>
</svg>
;
};

function FolderCoverageIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderCoverageSvg} {...props} />
};

export default FolderCoverageIcon;
