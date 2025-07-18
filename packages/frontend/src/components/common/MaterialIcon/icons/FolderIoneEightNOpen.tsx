import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderIoneEightNOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #5c6bc0)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #c5cae9)" d="m22.79 23.762-2.308-2.259.027-.026a15.7 15.7 0 0 0 3.373-5.877h2.663v-1.8h-6.363V12h-1.819v1.8H12v1.8h10.155a14.2 14.2 0 0 1-2.882 4.814 14 14 0 0 1-2.1-3.014h-1.819a15.8 15.8 0 0 0 2.71 4.103l-4.629 4.518 1.292 1.278 4.545-4.5 2.828 2.799zm5.12-4.562h-1.82L22 30h1.818l1.017-2.7h4.32l1.025 2.699H32zm-2.384 6.3L27 21.602l1.473 3.897Z"></path>
</svg>
;
};

function FolderIoneEightNOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderIoneEightNOpenSvg} {...props} />
};

export default FolderIoneEightNOpenIcon;
