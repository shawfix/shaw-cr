import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderDumpSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #757575)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #bdbdbd)" d="M26 12H15a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V16Zm-10 2h8v4h-8Zm6 12a3 3 0 1 1 3-3 2.996 2.996 0 0 1-3 3"></path>
</svg>
;
};

function FolderDumpIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderDumpSvg} {...props} />
};

export default FolderDumpIcon;
