import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ChessSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #cfd8dc)" d="M6 26h20v4H6zm16.5-13a5.49 5.49 0 0 0-4.5 2.344V10h4V6h-4V2h-4v4h-4v4h4v5.344a5.498 5.498 0 1 0-5 8.63V24h14v-.025A5.499 5.499 0 0 0 22.5 13"></path>
</svg>
;
};

function ChessIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ChessSvg} {...props} />
};

export default ChessIcon;
