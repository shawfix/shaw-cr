import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderHookOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1em" height="1em">
  <path fill="var(--material-icon-color, #7e57c2)" d="M926.944 384h-624.8a64 64 0 0 0-60.736 43.776L128 768V320h768a64 64 0 0 0-64-64H483.968a64 64 0 0 1-40.96-14.848l-41.216-34.304A64 64 0 0 0 360.832 192H128a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h704l153.76-358.784A64 64 0 0 0 926.944 384"></path>
  <path fill="var(--material-icon-color, #d1c4e9)" d="M800 320c-53.02 0-96 42.98-96 96 .104 40.593 25.729 76.733 64 90.264V768c0 35.346-28.654 64-64 64s-64-28.654-64-64v-64h64L576 576v192c0 70.692 57.308 128 128 128s128-57.308 128-128V506.264c38.271-13.531 63.896-49.671 64-90.264 0-53.02-42.98-96-96-96m0 64c17.673 0 32 14.327 32 32s-14.327 32-32 32-32-14.327-32-32 14.327-32 32-32"></path>
</svg>
;
};

function FolderHookOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderHookOpenSvg} {...props} />
};

export default FolderHookOpenIcon;
