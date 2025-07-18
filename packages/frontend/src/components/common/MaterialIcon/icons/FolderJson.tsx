import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderJsonSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #f9a825)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #fffde7)" d="M24 28v-2h3q.425 0 .713-.287T28 25v-2q0-.95.55-1.725t1.45-1.1v-.35q-.9-.325-1.45-1.1T28 17v-2q0-.425-.287-.713T27 14h-3v-2h3q1.25 0 2.125.875T30 15v2q0 .425.287.712T31 18h1v4h-1q-.425 0-.713.287T30 23v2q0 1.25-.875 2.125T27 28zm-7 0q-1.25 0-2.125-.875T14 25v-2q0-.425-.287-.713T13 22h-1v-4h1q.425 0 .713-.287T14 17v-2q0-1.25.875-2.125T17 12h3v2h-3q-.425 0-.713.287T16 15v2q0 .95-.55 1.725t-1.45 1.1v.35q.9.325 1.45 1.1T16 23v2q0 .425.287.713T17 26h3v2z"></path>
</svg>
;
};

function FolderJsonIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderJsonSvg} {...props} />
};

export default FolderJsonIcon;
