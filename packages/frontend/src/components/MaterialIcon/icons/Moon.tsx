import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function MoonSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #7e57c2)" d="M30 7.5a5.499 5.499 0 0 0-10.772-1.562 12.53 12.53 0 1 0 6.834 6.834A5.5 5.5 0 0 0 30 7.5M19.5 18a5.498 5.498 0 0 1-.476-10.976A6 6 0 0 0 19 7.5a5.5 5.5 0 0 0 5.5 5.5q.24-.002.476-.024A5.5 5.5 0 0 1 19.5 18"></path>
</svg>
;
};

function MoonIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={MoonSvg} {...props} />
};

export default MoonIcon;
