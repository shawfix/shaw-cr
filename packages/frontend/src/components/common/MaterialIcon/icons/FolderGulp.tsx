import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderGulpSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ff5252)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #ffcdd2)" d="M24 16v-2.968l2.563-1.306A1 1 0 0 0 27 10.381a1 1 0 0 0-1.345-.437L22 11.806V16h-4v2h1l1 10h6l1-10h1v-2Z"></path>
</svg>
;
};

function FolderGulpIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderGulpSvg} {...props} />
};

export default FolderGulpIcon;
