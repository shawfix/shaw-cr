import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderTriggerOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ffc107)" d="M926.944 384h-624.8a64 64 0 0 0-60.736 43.776L128 768V320h768a64 64 0 0 0-64-64H483.968a64 64 0 0 1-40.96-14.848l-41.216-34.304A64 64 0 0 0 360.832 192H128a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h704l153.76-358.784A64 64 0 0 0 926.944 384"></path>
  <path fill="var(--material-icon-color, #ffecb3)" d="m640 896 64-256h-64a28.252 32.205 0 0 1-20.876-53.906L832 320l-64 256h64a28.252 32.205 0 0 1 20.876 53.906z"></path>
</svg>
;
};

function FolderTriggerOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderTriggerOpenSvg} {...props} />
};

export default FolderTriggerOpenIcon;
