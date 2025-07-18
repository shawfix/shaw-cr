import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function PostcssSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #e53935)" d="M20 12v8h-8v-8zm2-2H10v12h12z"></path>
  <path fill="var(--material-icon-color, #e53935)" d="M16 5.488 26.159 20H5.84zM16 2 2 22h28z"></path>
  <path fill="var(--material-icon-color, #e53935)" d="M16 13a3 3 0 1 1-3 3 3.003 3.003 0 0 1 3-3m0-2a5 5 0 1 0 5 5 5 5 0 0 0-5-5"></path>
  <path fill="var(--material-icon-color, #e53935)" d="M16 4A12 12 0 1 1 4 16 12.014 12.014 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14 14 0 0 0 16 2"></path>
</svg>
;
};

function PostcssIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={PostcssSvg} {...props} />
};

export default PostcssIcon;
