import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderFlowOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #546e7a)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #fbc02d)" fill-opacity=".976" d="m12 10 6.71 6h-4.725l4.672 4h-6.676L20 28.025V12h3.548l1.584 2H22v6h1.98l1.979 2h-3.984l.025.025V28h10l-4-3.033v-1.221l.657.655L28 18h-2v-2.01l4 1.997v-5.99l-6-.999L21.923 10Z"></path>
</svg>
;
};

function FolderFlowOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderFlowOpenSvg} {...props} />
};

export default FolderFlowOpenIcon;
