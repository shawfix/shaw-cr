import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function AngularSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #e53935)" d="M9.87 2.5 3.022 5.666l.645 10.178zm4.26 0 6.202 13.344.645-10.178zM12 7.563l-2.451 5.964h4.906zm-3.73 8.959-.954 2.308L12 21.5l4.683-2.67-.953-2.308z"></path>
</svg>
;
};

function AngularIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={AngularSvg} {...props} />
};

export default AngularIcon;
