import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function RemixSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #b0bec5)" d="M28 12v-2a8 8 0 0 0-8-8H4v6h12.83a3.114 3.114 0 0 1 3.166 2.839A3 3 0 0 1 17 14H4v6h12a4 4 0 0 1 4 4v6h8v-5a7 7 0 0 0-7-7h1a6 6 0 0 0 6-6M12 26H4v4h10v-2a2 2 0 0 0-2-2"></path>
</svg>
;
};

function RemixIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={RemixSvg} {...props} />
};

export default RemixIcon;
