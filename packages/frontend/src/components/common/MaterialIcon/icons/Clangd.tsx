import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ClangdSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #4caf50)" d="M10 4H7.5C4.75 4 2 5.379 2 9.5c0 4.12 2.75 5.51 5.53 5.5H10v-3H7.667C7.665 11.973 5 12.289 5 9.478 5 6.672 7.395 7.028 7.52 7H10z"></path>
  <path fill="var(--material-icon-color, #2979ff)" d="M10 1v6H7.52C7.452 7.03 5 6.659 5 9.478 5 12.295 7.618 11.97 7.668 12H13V1h-2.725z"></path>
</svg>
;
};

function ClangdIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ClangdSvg} {...props} />
};

export default ClangdIcon;
