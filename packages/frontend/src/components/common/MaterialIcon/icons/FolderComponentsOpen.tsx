import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderComponentsOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #c0ca33)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #f0f4c3)" d="M12 20h8v8h-8zm10 0h8v8h-8zM12 10h8v8h-8zm8.343 4L26 8.343 31.657 14 26 19.657z"></path>
</svg>
;
};

function FolderComponentsOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderComponentsOpenSvg} {...props} />
};

export default FolderComponentsOpenIcon;
