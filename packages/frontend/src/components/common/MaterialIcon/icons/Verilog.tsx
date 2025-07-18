import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function VerilogSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ff7043)" d="M21.833 8A2.17 2.17 0 0 1 24 10.167v11.666A2.17 2.17 0 0 1 21.833 24H10.167A2.17 2.17 0 0 1 8 21.833V10.167A2.17 2.17 0 0 1 10.167 8zm0-2H10.167A4.167 4.167 0 0 0 6 10.167v11.666A4.167 4.167 0 0 0 10.167 26h11.666A4.167 4.167 0 0 0 26 21.833V10.167A4.167 4.167 0 0 0 21.833 6"></path>
  <path fill="var(--material-icon-color, #ff7043)" d="M18 14v4h-4v-4zm2-2h-8v8h8zM2 12h4v2H2zm0 6h4v2H2zm24-6h4v2h-4zm0 6h4v2h-4zm-8 8h2v4h-2zm-6 0h2v4h-2zm6-24h2v4h-2zm-6 0h2v4h-2z"></path>
</svg>
;
};

function VerilogIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={VerilogSvg} {...props} />
};

export default VerilogIcon;
