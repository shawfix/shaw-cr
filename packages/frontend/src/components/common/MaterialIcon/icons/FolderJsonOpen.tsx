import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderJsonOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #f9a825)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #fffde7)" d="M24 28v-2h3q.425 0 .713-.288Q28 25.425 28 25v-2q0-.95.55-1.725t1.45-1.1v-.35q-.9-.325-1.45-1.1T28 17v-2q0-.425-.287-.712Q27.424 14 27 14h-3v-2h3q1.25 0 2.125.875T30 15v2q0 .425.287.712.288.288.713.288h1v4h-1q-.425 0-.713.288Q30 22.575 30 23v2q0 1.25-.875 2.125T27 28zm-7 0q-1.25 0-2.125-.875T14 25v-2q0-.425-.287-.712Q13.425 22 13 22h-1v-4h1q.425 0 .713-.288Q14 17.425 14 17v-2q0-1.25.875-2.125T17 12h3v2h-3q-.425 0-.713.288Q16 14.575 16 15v2q0 .95-.55 1.725t-1.45 1.1v.35q.9.325 1.45 1.1T16 23v2q0 .425.287.712.288.288.713.288h3v2z"></path>
</svg>
;
};

function FolderJsonOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderJsonOpenSvg} {...props} />
};

export default FolderJsonOpenIcon;
