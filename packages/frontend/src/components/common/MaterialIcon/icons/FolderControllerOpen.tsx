import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderControllerOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ffc107)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #fff9c4)" d="M23.057 23.715a3.077 3.077 0 0 1-3.077-3.078 3.077 3.077 0 1 1 3.077 3.078m6.532-2.224a7 7 0 0 0 .062-.854 8 8 0 0 0-.062-.878l1.855-1.434a.444.444 0 0 0 .107-.562l-1.76-3.04a.43.43 0 0 0-.536-.195l-2.188.88a6.4 6.4 0 0 0-1.487-.863l-.325-2.329a.444.444 0 0 0-.44-.37h-3.516a.444.444 0 0 0-.44.37l-.324 2.33a6.4 6.4 0 0 0-1.486.86l-2.189-.878a.43.43 0 0 0-.536.193l-1.759 3.042a.433.433 0 0 0 .107.562l1.853 1.434a8 8 0 0 0-.061.88 7 7 0 0 0 .061.852l-1.853 1.458a.433.433 0 0 0-.107.563l1.759 3.043a.44.44 0 0 0 .536.193l2.19-.888a6 6 0 0 0 1.485.87l.325 2.33a.444.444 0 0 0 .44.37h3.516a.444.444 0 0 0 .44-.37l.324-2.33a6.4 6.4 0 0 0 1.487-.87l2.188.888a.445.445 0 0 0 .537-.193l1.757-3.043a.444.444 0 0 0-.105-.563Z"></path>
</svg>
;
};

function FolderControllerOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderControllerOpenSvg} {...props} />
};

export default FolderControllerOpenIcon;
