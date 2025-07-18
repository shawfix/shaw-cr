import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function BbxSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1em" height="1em">
  <path fill="var(--material-icon-color, #c62828)" d="M128 704v128c0 70.692 57.308 128 128 128h608c17.728 0 32-14.272 32-32V704z"></path>
  <path fill="var(--material-icon-color, #ffe082)" d="M704 704v192h128V704z"></path>
  <path fill="var(--material-icon-color, #fff8e1)" d="M192 704v96c0 53.184 42.816 96 96 96h544a96 96 0 0 1-96-96 96 96 0 0 1 96-96z"></path>
  <path fill="var(--material-icon-color, #ff1744)" d="M320 832h192v192l-96-96-96 96z"></path>
  <path fill="var(--material-icon-color, #f44336)" d="M256 64c-70.692 0-128 57.308-128 128v640c0 11.088 1.557 21.787 4.207 32.047C146.767 807.565 197.672 768.07 256 768h608c17.728 0 32-14.272 32-32V96c0-17.728-14.272-32-32-32z"></path>
  <path fill="var(--material-icon-color, #ffeb3b)" d="M256 192c-70.912 0-128 57.088-128 128v64c0-70.912 57.088-128 128-128h448v320H256c-70.912 0-128 57.088-128 128v64c0-70.912 57.088-128 128-128h512V192z"></path>
</svg>
;
};

function BbxIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={BbxSvg} {...props} />
};

export default BbxIcon;
