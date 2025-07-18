import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function DependabotSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #448aff)" d="M29.5 16H28v-4a2 2 0 0 0-2-2h-6V2.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H18v4H6a2 2 0 0 0-2 2v4H2.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5H4v2a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-2h1.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5m-15.533 2.647-3.106 3.106a.6.6 0 0 1-.84 0l-1.867-1.866a.6.6 0 0 1 0-.84l.627-.64a.6.6 0 0 1 .848-.005l.005.005.8.8 2.053-2.04a.6.6 0 0 1 .84 0l.64.64a.58.58 0 0 1 0 .84m9.88 0-3.106 3.106a.6.6 0 0 1-.84 0l-1.867-1.866a.6.6 0 0 1 0-.84l.627-.64a.6.6 0 0 1 .84 0l.813.8 2.053-2.04a.6.6 0 0 1 .84 0l.64.64a.604.604 0 0 1 0 .84"></path>
</svg>
;
};

function DependabotIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={DependabotSvg} {...props} />
};

export default DependabotIcon;
