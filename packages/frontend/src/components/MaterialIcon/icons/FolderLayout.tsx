import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderLayoutSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #039be5)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #b3e5fc)" d="M10 16h6v14h-6zm8 8h6v6h-6zm8 0h6v6h-6zm-8-8h14v6H18z"></path>
</svg>
;
};

function FolderLayoutIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderLayoutSvg} {...props} />
};

export default FolderLayoutIcon;
