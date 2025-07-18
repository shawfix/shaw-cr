import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderLinkOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1em" height="1em">
  <path fill="var(--material-icon-color, #7E57C2)" d="M926.912 384H302.144a64 64 0 0 0-60.736 43.776L128 768V320h768a64 64 0 0 0-64-64H483.968a64 64 0 0 1-40.96-14.848l-41.216-34.304A64 64 0 0 0 360.832 192H128a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h704l153.792-358.784A64 64 0 0 0 926.912 384"></path>
  <path fill="var(--material-icon-color, #d1c4e9)" d="M736 320c-53.02 0-96 42.98-96 96 .104 40.593 25.729 76.733 64 90.264V576h-32c-17.673 0-32 14.327-32 32s14.327 32 32 32h32v190.547C595.489 821.653 512 768.467 512 704h64L448 576v128c0 106.039 128.942 192 288 192s288-85.961 288-192V576L896 704h64c0 64.467-83.489 117.653-192 126.547V640h32c17.673 0 32-14.327 32-32s-14.327-32-32-32h-32v-69.736c38.271-13.531 63.896-49.671 64-90.264 0-53.02-42.98-96-96-96m0 64c17.673 0 32 14.327 32 32s-14.327 32-32 32-32-14.327-32-32 14.327-32 32-32"></path>
</svg>
;
};

function FolderLinkOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderLinkOpenSvg} {...props} />
};

export default FolderLinkOpenIcon;
