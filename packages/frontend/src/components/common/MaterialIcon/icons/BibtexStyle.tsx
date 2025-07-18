import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function BibtexStyleSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1em" height="1em">
  <path fill="var(--material-icon-color, #795548)" d="M96 832h832c17.728 0 32 14.272 32 32v64c0 17.728-14.272 32-32 32H96c-17.728 0-32-14.272-32-32v-64c0-17.728 14.272-32 32-32"></path>
  <path fill="var(--material-icon-color, #4caf50)" d="M160 192h64c17.728 0 32 14.272 32 32v512c0 17.728-14.272 32-32 32h-64c-17.728 0-32-14.272-32-32V224c0-17.728 14.272-32 32-32"></path>
  <path fill="var(--material-icon-color, #f44336)" d="M512 96c0-17.728-14.272-32-32-32H352c-17.728 0-32 14.272-32 32v640c0 17.728 14.272 32 32 32h128c17.728 0 32-14.272 32-32z"></path>
  <path fill="var(--material-icon-color, #ffeb3b)" d="M320 192v64h192v-64zm0 384v64h192v-64z"></path>
  <path fill="var(--material-icon-color, #bbdefb)" d="M608 320h256c17.728 0 32 14.272 32 32v384c0 17.728-14.272 32-32 32H608c-17.728 0-32-14.272-32-32V352c0-17.728 14.272-32 32-32"></path>
  <path fill="var(--material-icon-color, #2196f3)" d="M608 320c-17.673 0-32 14.327-32 32v352c35.346 0 64-28.654 64-64v-32a32 32 0 0 1 32-32c17.673 0 32-14.327 32-32v-64a32 32 0 0 1 32-32c17.673 0 32-14.327 32-32v-96z"></path>
  <path d="M745.606 339.205 924.74 473.693a15.965 15.965 0 0 1 3.19 22.401 15.965 15.965 0 0 1-22.403 3.19l-179.133-134.49a15.965 15.965 0 0 1-3.19-22.401 15.965 15.965 0 0 1 22.402-3.19z"></path>
</svg>
;
};

function BibtexStyleIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={BibtexStyleSvg} {...props} />
};

export default BibtexStyleIcon;
