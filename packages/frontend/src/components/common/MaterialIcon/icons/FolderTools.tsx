import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderToolsSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #1e88e5)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #bbdefb)" d="M24.363 19.012 13.364 30 12 28.638l10.988-11zm4.365-2.815.574-.576-.77-.77.624-.623-1.384-1.383-.623.624-.77-.77-.574.575A20.5 20.5 0 0 0 20.155 10l-.81 1.744a24.5 24.5 0 0 1 4.736 3.253l-.488.488 2.923 2.923.488-.488a24.5 24.5 0 0 1 3.252 4.736L32 21.848a20.5 20.5 0 0 0-3.272-5.651"></path>
</svg>
;
};

function FolderToolsIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderToolsSvg} {...props} />
};

export default FolderToolsIcon;
