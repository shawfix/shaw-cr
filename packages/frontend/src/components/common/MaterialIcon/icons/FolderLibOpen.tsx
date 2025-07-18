import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderLibOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #c0ca33)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #f0f4c3)" d="M23 16a3 3 0 0 0 .003-6H23a3 3 0 0 0-3 2.999V13a3 3 0 0 0 2.999 3zm0 3.973c-2.225-2.078-5.955-3.978-9-3.973v10c3.19 0 6.85 2.004 9 4 2.225-2.078 5.955-4.005 9-4V16c-3.045-.005-6.775 1.895-9 3.973"></path>
</svg>
;
};

function FolderLibOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderLibOpenSvg} {...props} />
};

export default FolderLibOpenIcon;
