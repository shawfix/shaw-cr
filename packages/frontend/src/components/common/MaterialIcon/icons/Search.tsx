import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function SearchSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #42a5f5)" d="M17 17a4 4 0 1 1-4 4 4.005 4.005 0 0 1 4-4m0-3a7 7 0 1 0 7 7 7 7 0 0 0-7-7"></path>
  <path fill="var(--material-icon-color, #42a5f5)" d="m19.586 26.414 2.828-2.828L26 27.17 23.17 30zM10 26H6V4h9.172L22 10.828V12h2v-2l-8-8H6a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h4Z"></path>
  <path fill="var(--material-icon-color, #42a5f5)" d="M22 12h-8V4h2l6 6zm0 0h2v2h-2z"></path>
</svg>
;
};

function SearchIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={SearchSvg} {...props} />
};

export default SearchIcon;
