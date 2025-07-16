import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderCartOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #009688)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #b2dfdb)" d="M30.613 12H18.22l-.4-2H14v2h2.18l1.84 9.196A1 1 0 0 0 19 22h11v-2H19.82l-.4-2H30l1.561-4.684A1 1 0 0 0 30.613 12"></path>
  <circle cx="20" cy="26" r="2" fill="#b2dfdb"></circle>
  <circle cx="28" cy="26" r="2" fill="#b2dfdb"></circle>
</svg>
;
};

function FolderCartOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderCartOpenSvg} {...props} />
};

export default FolderCartOpenIcon;
