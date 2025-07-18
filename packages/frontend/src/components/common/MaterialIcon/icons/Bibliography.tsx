import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function BibliographySvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1em" height="1em">
  <path fill="var(--material-icon-color, #795548)" d="M96 832h832c17.728 0 32 14.272 32 32v64c0 17.728-14.272 32-32 32H96c-17.728 0-32-14.272-32-32v-64c0-17.728 14.272-32 32-32"></path>
  <path fill="var(--material-icon-color, #4caf50)" d="M160 192h64c17.728 0 32 14.272 32 32v512c0 17.728-14.272 32-32 32h-64c-17.728 0-32-14.272-32-32V224c0-17.728 14.272-32 32-32"></path>
  <path fill="var(--material-icon-color, #f44336)" d="M512 96c0-17.728-14.272-32-32-32H352c-17.728 0-32 14.272-32 32v640c0 17.728 14.272 32 32 32h128c17.728 0 32-14.272 32-32z"></path>
  <path fill="var(--material-icon-color, #2196f3)" d="m530.161 158.902 57.333-27.693a31.804 31.804 0 0 1 42.634 14.936l262.693 548.17c7.66 15.984.977 35.057-14.982 42.766l-57.333 27.693a31.804 31.804 0 0 1-42.634-14.936L515.18 201.668c-7.66-15.983-.977-35.057 14.982-42.766z"></path>
  <path fill="var(--material-icon-color, #ffeb3b)" d="M320 192v64h192v-64zm0 384v64h192v-64z"></path>
</svg>
;
};

function BibliographyIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={BibliographySvg} {...props} />
};

export default BibliographyIcon;
