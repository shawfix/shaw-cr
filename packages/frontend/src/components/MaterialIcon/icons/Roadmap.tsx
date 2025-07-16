import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function RoadmapSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #26a69a)" d="M2 2h2v18h18v2H2zm5 8h10v3H7zm4 5h10v3H11zM6 4h16v4h-2V6H8v2H6z"></path>
</svg>
;
};

function RoadmapIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={RoadmapSvg} {...props} />
};

export default RoadmapIcon;
