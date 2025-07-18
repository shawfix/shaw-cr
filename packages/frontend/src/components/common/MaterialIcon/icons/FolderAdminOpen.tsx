import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderAdminOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #546e7a)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #cfd8dc)" d="m25 10-7 3.273v4.908c0 4.542 2.986 8.788 7 9.819 4.014-1.031 7-5.277 7-9.82v-4.907zm0 3.273a2.457 2.457 0 1 1-2.333 2.454A2.396 2.396 0 0 1 25 13.273m3.99 9.817A7.6 7.6 0 0 1 25 26.298a7.6 7.6 0 0 1-3.99-3.208 8.4 8.4 0 0 1-.677-1.25c0-1.352 2.108-2.456 4.667-2.456s4.666 1.08 4.666 2.455a8.3 8.3 0 0 1-.676 1.251"></path>
</svg>
;
};

function FolderAdminOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderAdminOpenSvg} {...props} />
};

export default FolderAdminOpenIcon;
