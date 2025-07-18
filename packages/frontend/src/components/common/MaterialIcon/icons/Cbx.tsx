import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function CbxSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1em" height="1em">
  <path fill="var(--material-icon-color, #1565c0)" d="M128 704v128c0 70.692 57.308 128 128 128h608c17.728 0 32-14.272 32-32V704z"></path>
  <path fill="var(--material-icon-color, #ffe082)" d="M704 704v192h128V704z"></path>
  <path fill="var(--material-icon-color, #fff8e1)" d="M192 704v96c0 53.184 42.816 96 96 96h544a96 96 0 0 1-96-96 96 96 0 0 1 96-96z"></path>
  <path fill="var(--material-icon-color, #ff1744)" d="M320 832h192v192l-96-96-96 96z"></path>
  <path fill="var(--material-icon-color, #2196f3)" d="M256 64c-70.692 0-128 57.308-128 128v640c0 11.088 1.557 21.787 4.207 32.047C146.767 807.565 197.672 768.07 256 768h608c17.728 0 32-14.272 32-32V96c0-17.728-14.272-32-32-32z"></path>
  <path fill="var(--material-icon-color, #e3f2fd)" d="M384 192c-70.692 0-128 57.308-128 128 .171 67.295 52.422 122.965 119.57 127.396L256 640h80l156.748-252.488h-.146A128 128 0 0 0 512 320c0-70.692-57.308-128-128-128m320 0c-70.692 0-128 57.308-128 128 .171 67.295 52.422 122.965 119.57 127.396L576 640h80l156.748-252.488h-.146A128 128 0 0 0 832 320c0-70.692-57.308-128-128-128"></path>
</svg>
;
};

function CbxIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={CbxSvg} {...props} />
};

export default CbxIcon;
