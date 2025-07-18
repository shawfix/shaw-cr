import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderBaseSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #8d6e63)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <rect width="18" height="6" x="14" y="22" fill="#d7ccc8" rx="1"></rect>
</svg>
;
};

function FolderBaseIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderBaseSvg} {...props} />
};

export default FolderBaseIcon;
