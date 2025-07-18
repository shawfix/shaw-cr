import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderWakatimeOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #455a64)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #f5f5f5)" d="M31.578 14.516A1.62 1.62 0 0 0 30.442 14a1.5 1.5 0 0 0-1.273.728l-6.255 8.823-.82-1.324a1.54 1.54 0 0 0-1.31-.756 1.52 1.52 0 0 0-1.331.827l-.783 1.253-3.795-5.52a1.54 1.54 0 0 0-1.352-.8 1.6 1.6 0 0 0-1.521 1.644 1.67 1.67 0 0 0 .366 1.066l5.026 7.205a1.506 1.506 0 0 0 2.686.058l.717-1.136.698 1.103a2 2 0 0 0 .178.266 2 2 0 0 0 .13.141l.106.092a2 2 0 0 0 .227.15l.1.05a1.4 1.4 0 0 0 .455.122l.123.008h.029a1.53 1.53 0 0 0 1.204-.617l7.61-10.702a1.7 1.7 0 0 0 .341-1.007 1.6 1.6 0 0 0-.42-1.158m-9.212 12.82"></path>
</svg>
;
};

function FolderWakatimeOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderWakatimeOpenSvg} {...props} />
};

export default FolderWakatimeOpenIcon;
