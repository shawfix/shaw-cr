import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderFlutterSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #03a9f4)" d="m13.8 7.5-1.2-1a2 2 0 0 0-1.3-.5H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.1a2 2 0 0 1-1.3-.5"></path>
  <path fill="var(--material-icon-color, #b3e5fc)" d="m20 10-8 8 4 4 12-12zm4 8-6 6 6 6h8l-6-6 6-6z"></path>
</svg>
;
};

function FolderFlutterIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderFlutterSvg} {...props} />
};

export default FolderFlutterIcon;
