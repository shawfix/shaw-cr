import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function WallabySvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #4caf50)" d="M16 2v14H2v14h28V2z"></path>
</svg>
;
};

function WallabyIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={WallabySvg} {...props} />
};

export default WallabyIcon;
