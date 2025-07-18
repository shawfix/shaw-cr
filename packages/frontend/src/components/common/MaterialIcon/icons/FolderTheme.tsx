import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderThemeSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #1e88e5)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #bbdefb)" d="M21.998 10C16 10 12 14 12 20a10 10 0 0 0 10 10c.92 0 2 0 2-2 0-.436-.569-.785-.964-1.18A2.37 2.37 0 0 1 22 25c0-1 1-1 2-1h4c4 0 4-4 4-6 0-4-4-8-10.002-8M16 20a2 2 0 1 1 2-2 2 2 0 0 1-2 2m6-4a2 2 0 1 1 2-2 2 2 0 0 1-2 2m6 4a2 2 0 1 1 2-2 2 2 0 0 1-2 2"></path>
</svg>
;
};

function FolderThemeIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderThemeSvg} {...props} />
};

export default FolderThemeIcon;
