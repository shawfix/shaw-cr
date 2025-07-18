import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function MarkdocSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #78909c)" d="m14 10-4 3.5L6 10H4v12h4v-6l2 2 2-2v6h4V10Z"></path>
  <rect width="6" height="16" x="22" y="8" fill="#ffb300" rx=".5"></rect>
</svg>
;
};

function MarkdocIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={MarkdocSvg} {...props} />
};

export default MarkdocIcon;
