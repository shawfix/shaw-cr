import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ColdfusionSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #0d3858)" stroke="#4dd0e1" stroke-width="2" d="M3.009 3.009h25.983v25.983H3.009z"></path>
  <path fill="var(--material-icon-color, #4dd0e1)" d="M24 9.5v-1a.5.5 0 0 0-.5-.5H22a2 2 0 0 0-2 2v2h-1.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H20v7.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V14h1.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H22v-2h1.5a.5.5 0 0 0 .5-.5M12 20a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h3.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H12a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h3.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5Z"></path>
</svg>
;
};

function ColdfusionIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ColdfusionSvg} {...props} />
};

export default ColdfusionIcon;
