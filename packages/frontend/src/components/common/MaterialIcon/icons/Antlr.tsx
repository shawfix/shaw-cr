import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function AntlrSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #f44336)" d="M10.355 1.614a10.469 10.483 0 0 1 11.813 7.792 10.327 10.34 0 0 1-1.565 8.673 10.583 10.597 0 0 1-14.819 2.428 10.416 10.43 0 0 1-4.222-7.14 10.641 10.656 0 0 1 .999-5.994 10.498 10.512 0 0 1 7.795-5.76m.27 3.825c-.949 2.08-1.9 4.16-2.83 6.25-.479 1.345-1.127 2.615-1.716 3.915-.174.408-.468.853-.287 1.312a1.088 1.09 0 0 0 1.575.556c.458-.261.566-.828.778-1.272.952-2.405 2.13-4.708 3.11-7.104a7.356 7.366 0 0 1 .776-1.6c.568 1.406 1.186 2.791 1.773 4.19a14.819 14.839 0 0 1 .969 2.197c-1.51-.015-3.02-.004-4.531-.01 2.073 1.233 4.202 2.379 6.305 3.562a1.094 1.094 0 0 0 1.698-1.036c-.425-1.15-1.014-2.237-1.5-3.364-.917-2.393-2.076-4.685-3.097-7.036a2.685 2.689 0 0 0-.738-1.163 1.564 1.566 0 0 0-2.285.602z"></path>
</svg>
;
};

function AntlrIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={AntlrSvg} {...props} />
};

export default AntlrIcon;
