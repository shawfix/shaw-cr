import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderBibliographyOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1em" height="1em">
  <path fill="var(--material-icon-color, #a1887f)" d="M926.912 384H302.144a64 64 0 0 0-60.736 43.776L128 768V320h768a64 64 0 0 0-64-64H483.968a64 64 0 0 1-40.96-14.848l-41.216-34.304A64 64 0 0 0 360.832 192H128a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h704l153.792-358.784A64 64 0 0 0 926.912 384"></path>
  <path fill="var(--material-icon-color, #8d6e63)" d="M576 704v128c0 35.456 28.544 64 64 64h352c17.728 0 32-14.272 32-32V704z"></path>
  <path fill="var(--material-icon-color, #ffe082)" d="M896 768v64h64v-64z"></path>
  <path fill="var(--material-icon-color, #fff8e1)" d="M640 768c0 35.456 28.544 64 64 64h256c-35.346 0-64-28.654-64-64z"></path>
  <path fill="var(--material-icon-color, #ff1744)" d="M704 800h64v160h-64z"></path>
  <path fill="var(--material-icon-color, #d7ccc8)" d="M640 320c-35.456 0-64 28.544-64 64v448c0-35.346 28.654-64 64-64h352c17.728 0 32-14.272 32-32V352c0-17.728-14.272-32-32-32z"></path>
  <path fill="var(--material-icon-color, #5d4037)" d="M640 384v32h32c32 0 32 7.163 32 16v224c0 8.837 0 16-32 16h-32v32h192c70.692 0 128-39.399 128-88-.014-40.302-39.848-75.446-96.688-85.305C884.346 514.563 895.986 493.665 896 472c0-48.601-57.308-88-128-88zm143.873 33.736C811.541 423.914 832 445.866 832 472c0 30.928-28.654 56-64 56v-96c0-8.837 7.266-16.186 15.873-14.264M768 560h64c35.346 0 64 25.072 64 56s-28.654 56-64 56h-48a16 16 0 0 1-16-16z"></path>
</svg>
;
};

function FolderBibliographyOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderBibliographyOpenSvg} {...props} />
};

export default FolderBibliographyOpenIcon;
