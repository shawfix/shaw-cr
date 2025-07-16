import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderStoreSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ff7043)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #ffccbc)" d="M22 26h-6v-6h6m10 0v-2l-2-4H14l-2 4v2h2v8h10v-8h4v8h2v-8m0-10H14v2h16z"></path>
</svg>
;
};

function FolderStoreIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderStoreSvg} {...props} />
};

export default FolderStoreIcon;
