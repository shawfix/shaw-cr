import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderNodeSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #8bc34a)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #dcedc8)" d="m25 12-7 4.072v7.854L25 28l7-4.074v-7.854Z"></path>
</svg>
;
};

function FolderNodeIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderNodeSvg} {...props} />
};

export default FolderNodeIcon;
