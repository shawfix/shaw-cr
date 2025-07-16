import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function GamemakerSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #26a69a)" d="M8 1.422 14.578 8h-3.759v3.853c-.94.846-1.88 1.785-2.819 2.725L1.422 8zM5.275 8 8 10.725V8h2.725A37 37 0 0 0 8 5.275 37 37 0 0 0 5.275 8"></path>
</svg>
;
};

function GamemakerIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={GamemakerSvg} {...props} />
};

export default GamemakerIcon;
