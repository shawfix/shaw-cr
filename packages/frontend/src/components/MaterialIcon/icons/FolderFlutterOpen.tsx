import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderFlutterOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #03a9f4)" d="M29 12H9.4a2 2 0 0 0-1.9 1.4L4 24V10h24a2 2 0 0 0-2-2H15.1a2 2 0 0 1-1.3-.5l-1.2-1a2 2 0 0 0-1.3-.5H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.8-11.2A2 2 0 0 0 29 12"></path>
  <path fill="var(--material-icon-color, #b3e5fc)" d="m20 10-8 8 4 4 12-12zm4 8-6 6 6 6h8l-6-6 6-6z"></path>
</svg>
;
};

function FolderFlutterOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderFlutterOpenSvg} {...props} />
};

export default FolderFlutterOpenIcon;
