import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function MesonSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="1em" height="1em">
  <path fill="var(--material-icon-color, #3f51b5)" d="M9.06 1.534c-4.627 2.64-7.5 7.588-7.526 12.962 4.84 2.668 10.525 2.577 14.93.028q0-.02.002-.039C16.46 9.14 13.637 4.203 9.06 1.533zm2.49 5.722c.687.47.585 1.605.474 2.382-.14.856-.952 2.262-2.006 3.18.136.198.216.442.215.701-.654.334-1.302-.042-2.086-.721s-1.63-2.039-1.91-3.437a1.12 1.12 0 0 1-.723-.169c.057-.783.88-1.249 1.61-1.524.728-.275 2.607-.368 3.932.108.104-.219.275-.403.495-.52z"></path>
</svg>
;
};

function MesonIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={MesonSvg} {...props} />
};

export default MesonIcon;
