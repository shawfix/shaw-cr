import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderAttachmentOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1em" height="1em">
  <path fill="var(--material-icon-color, #9c27b0)" d="M128 192a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h704l153.791-358.783A64 64 0 0 0 926.912 384H302.145a64 64 0 0 0-60.737 43.775L128 768V320h768a64 64 0 0 0-64-64H483.969a64 64 0 0 1-40.961-14.848l-41.215-34.304A64 64 0 0 0 360.832 192z"></path>
  <path fill="var(--material-icon-color, #e1bee7)" d="M990.922 446.852c.156 8.69-1.383 17.621-5.131 26.365l-26.271 61.287c.306 3.125.48 6.29.48 9.496 0 53.02-42.98 96-96 96H544c-17.673 0-32-14.327-32-32s14.327-32 32-32h320v-64H544c-53.02 0-96 42.98-96 96s42.98 96 96 96h320c88.366 0 160-71.634 160-160 0-36.586-12.416-70.195-33.078-97.148"></path>
</svg>
;
};

function FolderAttachmentOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderAttachmentOpenSvg} {...props} />
};

export default FolderAttachmentOpenIcon;
