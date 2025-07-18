import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderTriggerSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ffc107)" d="m443.008 241.152-41.216-34.304A64 64 0 0 0 360.832 192H128a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h768a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H483.968a64 64 0 0 1-40.96-14.848"></path>
  <path fill="var(--material-icon-color, #ffecb3)" d="m640 896 64-256h-64a28.252 32.205 0 0 1-20.876-53.906L832 320l-64 256h64a28.252 32.205 0 0 1 20.876 53.906z"></path>
</svg>
;
};

function FolderTriggerIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderTriggerSvg} {...props} />
};

export default FolderTriggerIcon;
