import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderAttachmentSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1em" height="1em">
  <path fill="var(--material-icon-color, #9c27b0)" d="m443.008 241.152-41.216-34.304A64 64 0 0 0 360.832 192H128a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h768a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H483.968a64 64 0 0 1-40.96-14.848"></path>
  <path fill="var(--material-icon-color, #e1bee7)" d="M960 416.219V544c0 53.02-42.98 96-96 96H544c-17.673 0-32-14.327-32-32s14.327-32 32-32h320v-64H544c-53.02 0-96 42.98-96 96s42.98 96 96 96h320c88.366 0 160-71.634 160-160 0-52.295-25.203-98.585-64-127.781"></path>
</svg>
;
};

function FolderAttachmentIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderAttachmentSvg} {...props} />
};

export default FolderAttachmentIcon;
