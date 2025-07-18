import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderEnvironmentSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #66bb6a)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #c8e6c9)" d="m23 16-3.749 5 2.85 3.798L20.5 26l-4.499-6L10 28h22Z"></path>
</svg>
;
};

function FolderEnvironmentIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderEnvironmentSvg} {...props} />
};

export default FolderEnvironmentIcon;
