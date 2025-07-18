import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function PythonMiscSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #757575)" d="M15 2H6a2.006 2.006 0 0 0-2 2v22a2.006 2.006 0 0 0 2 2h16a2 2 0 0 0 2-2V11Zm3 22H6v-2h12Zm0-4H6v-2h12Zm0-4H6v-2h12Zm-4-4V4l8 8Z"></path>
  <path fill="var(--material-icon-color, #fbc02d)" d="M30.714 16H28v5h-9v7.714A1.286 1.286 0 0 0 20.286 30h6.428A1.286 1.286 0 0 0 28 28.714V26h-6v-1h8.714A1.286 1.286 0 0 0 32 23.714v-6.428A1.286 1.286 0 0 0 30.714 16M24 28h3v1h-3Z" style="isolation:isolate"></path>
  <path fill="var(--material-icon-color, #0288d1)" d="M25.714 12h-6.428A1.286 1.286 0 0 0 18 13.286V16h6v1h-8.714A1.286 1.286 0 0 0 14 18.286v6.428A1.286 1.286 0 0 0 15.286 26H18v-6h9v-6.714A1.286 1.286 0 0 0 25.714 12M22 14h-3v-1h3Z" style="isolation:isolate"></path>
</svg>
;
};

function PythonMiscIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={PythonMiscSvg} {...props} />
};

export default PythonMiscIcon;
