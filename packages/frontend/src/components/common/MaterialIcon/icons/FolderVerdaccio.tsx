import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderVerdaccioSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #00897b)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #b2dfdb)" d="m14 12.001 7.765 16h2.536l4.852-10h-4.337l-1.78 4L18.339 12Z"></path>
  <path fill="var(--material-icon-color, #ffcdd2)" d="M25.764 12.001v.927h1.732l-.285.584h-2.833v.922h2.377l-.338.696h-3.394v.871h7.04L32 12.016h-.765V12Z"></path>
</svg>
;
};

function FolderVerdaccioIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderVerdaccioSvg} {...props} />
};

export default FolderVerdaccioIcon;
