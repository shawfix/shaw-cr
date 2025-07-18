import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderPhpmailerSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #616161)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #eee)" d="M14 14h-4v14h2v-6h2a4 4 0 0 0 0-8m0 6h-2v-4h2a2 2 0 0 1 0 4"></path>
  <path fill="var(--material-icon-color, #ffd180)" d="M20 17v11h12V17l-6 6z"></path>
  <path fill="var(--material-icon-color, #ffd180)" d="M32 14H20l6 6z"></path>
</svg>
;
};

function FolderPhpmailerIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderPhpmailerSvg} {...props} />
};

export default FolderPhpmailerIcon;
