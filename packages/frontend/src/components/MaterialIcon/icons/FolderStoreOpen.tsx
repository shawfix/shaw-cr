import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderStoreOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ff7043)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #ffccbc)" d="M22 26h-6v-6h6m10 0v-2l-2-4H14l-2 4v2h2v8h10v-8h4v8h2v-8m0-10H14v2h16z"></path>
</svg>
;
};

function FolderStoreOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderStoreOpenSvg} {...props} />
};

export default FolderStoreOpenIcon;
