import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderArchiveOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ffa726)" d="M926.912 384H302.144a64 64 0 0 0-60.736 43.776L128 768V320h768a64 64 0 0 0-64-64H483.968a64 64 0 0 1-40.96-14.848l-41.216-34.304A64 64 0 0 0 360.832 192H128a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h704l153.792-358.784A64 64 0 0 0 926.912 384"></path>
  <path fill="var(--material-icon-color, #ffe0b2)" d="M512 320c-35.456 0-64 28.544-64 64v64c0 35.456 28.544 64 64 64v320c0 35.456 28.544 64 64 64h320c35.456 0 64-28.544 64-64V512c35.456 0 64-28.544 64-64v-64c0-35.456-28.544-64-64-64zm0 64h448v64H512zm128 128h192v64H640z"></path>
</svg>
;
};

function FolderArchiveOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderArchiveOpenSvg} {...props} />
};

export default FolderArchiveOpenIcon;
