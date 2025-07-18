import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderDebugOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #f9a825)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #fff9c4)" d="M32 18v-2h-2.347a6 6 0 0 0-1.717-2.522L30 11.414 28.586 10l-2.412 2.412a5.94 5.94 0 0 0-4.347 0L19.414 10 18 11.414l2.064 2.064A6 6 0 0 0 18.347 16H16v2h2v2h-2v2h2v2h-2v2h2.349a5.992 5.992 0 0 0 11.302 0H32v-2h-2v-2h2v-2h-2v-2Zm-6 8h-4v-2h4Zm0-6h-4v-2h4Z"></path>
</svg>
;
};

function FolderDebugOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderDebugOpenSvg} {...props} />
};

export default FolderDebugOpenIcon;
