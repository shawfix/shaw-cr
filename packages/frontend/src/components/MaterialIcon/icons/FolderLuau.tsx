import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderLuauSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="var(--material-icon-color, none)" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #42A5F5)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #B3E5FC)" fill-rule="evenodd" d="M18.381 12 31 15.381 27.619 28 15 24.619zm8.095 3.86 2.524.676-.676 2.524-2.524-.677z" clip-rule="evenodd"></path>
</svg>
;
};

function FolderLuauIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderLuauSvg} {...props} />
};

export default FolderLuauIcon;
