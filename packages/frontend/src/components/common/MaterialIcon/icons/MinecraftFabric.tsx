import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function MinecraftFabricSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414" clip-rule="evenodd" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #38342a)" d="M8 1v1H7v2H6v1H5v1H4v1H3v1H2v1H1v2h1v1h1v1h1v1h1v1h2v-1h1v-2h1v-1h1v-1h1V9h2V8h1V6h-1V5h-1V4h-1V3h-1V2H9V1z"></path>
  <path fill="var(--material-icon-color, #dbd0b4)" d="M8 2v1h1v1h1v1h1v1h1V5h-1V4h-1V3H9V2zM7 4v2H5v1H4v1H3v2h1v1h1v1h2v-2H6V9h2v1h1V8H8V7h2V6H9V5H8V4z"></path>
  <path fill="var(--material-icon-color, #38342a)" d="M8 4v1h1v1h1v1h1V6h-1V5H9V4z"></path>
  <path fill="var(--material-icon-color, #bcb29c)" d="M9 4v1h1V4zm1 1v1h1V5zm1 1v1h1V6zm0 1h-1v1H9v2h1V9h1zm-2 3H7v2h1v-1h1zm-2 2H6v1h1z"></path>
  <path fill="var(--material-icon-color, #807a6d)" d="M12 7v1h1V7z"></path>
  <path fill="var(--material-icon-color, #aea694)" d="M2 9v1h1v1h1v1h1v1h1v-1H5v-1H4v-1H3V9z"></path>
  <path fill="var(--material-icon-color, #9a927e)" d="M2 10v1h1v-1zm1 1v1h1v-1zm1 1v1h1v-1zm1 1v1h1v-1z"></path>
  <path fill="var(--material-icon-color, #c6bca5)" d="M8 3v1h1V3zM6 5v1h1V5zm1 1v1h1V6zm1 1v1h2V7zM5 8v1h1V8zm1 1v1h2V9z"></path>
</svg>
;
};

function MinecraftFabricIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={MinecraftFabricSvg} {...props} />
};

export default MinecraftFabricIcon;
