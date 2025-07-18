import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function SnapcraftSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1.28 1.28" width="1em" height="1em">
  <path fill="var(--material-icon-color, #81c784)" d="M.76.36 1 .48.76.72zm-.48.8.44-.4-.2-.2zM.12.12l.6.6V.36z"></path>
  <path fill="var(--material-icon-color, #ff6e40)" d="M1.12.36.76.32l.4.2z"></path>
</svg>
;
};

function SnapcraftIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={SnapcraftSvg} {...props} />
};

export default SnapcraftIcon;
