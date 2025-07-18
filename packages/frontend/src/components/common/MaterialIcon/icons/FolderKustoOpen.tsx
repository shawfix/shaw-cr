import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderKustoOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #1e88e5)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #bbdefb)" d="M25 10c-3.878 0-7 3.122-7 7v7h7c3.878 0 7-3.122 7-7s-3.122-7-7-7m3 4h2v6h-2zm-8 2h2v4h-2zm4 2h2v2h-2zm-8 2-3.996.02v2.322L12 24h4zm-4 6v4h4v-4zm6 0v4h4v-4z"></path>
</svg>
;
};

function FolderKustoOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderKustoOpenSvg} {...props} />
};

export default FolderKustoOpenIcon;
