import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function PowerpointSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #E64A19)" d="M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m7 1.5V9h5.5zM8 11v2h1v6H8v1h4v-1h-1v-2h2a3 3 0 0 0 3-3 3 3 0 0 0-3-3zm5 2a1 1 0 0 1 1 1 1 1 0 0 1-1 1h-2v-2z"></path>
</svg>
;
};

function PowerpointIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={PowerpointSvg} {...props} />
};

export default PowerpointIcon;
