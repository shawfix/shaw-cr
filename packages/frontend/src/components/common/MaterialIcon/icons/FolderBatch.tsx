import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderBatchSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #616161)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #bdbdbd)" d="M16 14h12v2H16zm0 4h12v2H16zm0 4h8v2h-8zm10 0v6l6-3z"></path>
</svg>
;
};

function FolderBatchIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderBatchSvg} {...props} />
};

export default FolderBatchIcon;
