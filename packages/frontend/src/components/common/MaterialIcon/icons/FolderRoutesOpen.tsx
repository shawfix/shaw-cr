import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderRoutesOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #43a047)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #c8e6c9)" d="M17.414 14.586 20 12h-8v8l2.586-2.586 4.91 4.91A1.7 1.7 0 0 1 20 23.541V28h4v-4.459a5.68 5.68 0 0 0-1.676-4.045ZM29.36 12l-5.61 4.93.57.57a5.6 5.6 0 0 1 1.56 2.89L32 15.01Z"></path>
</svg>
;
};

function FolderRoutesOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderRoutesOpenSvg} {...props} />
};

export default FolderRoutesOpenIcon;
