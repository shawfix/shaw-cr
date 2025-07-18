import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderCiOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #0288d1)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #b3e5fc)" d="M23.998 12.978v2.986l4-3.981-4-3.983v2.986A7.98 7.98 0 0 0 16 18.95v.002a7.9 7.9 0 0 0 1.239 4.24l1.46-1.455a5.86 5.86 0 0 1-.7-2.785 5.987 5.987 0 0 1 6-5.974m6.759 1.732-1.46 1.454a5.968 5.968 0 0 1-5.3 8.76v-2.985l-4 3.983 4 3.981v-2.986a7.98 7.98 0 0 0 7.999-7.964v-.001a7.87 7.87 0 0 0-1.24-4.24Z"></path>
</svg>
;
};

function FolderCiOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderCiOpenSvg} {...props} />
};

export default FolderCiOpenIcon;
