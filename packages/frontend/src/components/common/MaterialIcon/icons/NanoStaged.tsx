import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function NanoStagedSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #b0bec5)" d="M12 1.481A10.495 10.495 0 0 0 1.48 11.999c0 5.828 4.69 10.52 10.518 10.52S22.52 17.826 22.52 12A10.496 10.496 0 0 0 12 1.481M7.952 6.899a.2.2 0 0 1 .11.028l5.661 3.27a.21.21 0 0 0 .212 0l2.002-1.157a.21.21 0 0 1 .317.18v7.67a.21.21 0 0 1-.317.183l-5.662-3.27a.21.21 0 0 0-.21 0l-2.004 1.159a.21.21 0 0 1-.314-.183V7.11c0-.121.097-.208.205-.21z"></path>
</svg>
;
};

function NanoStagedIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={NanoStagedSvg} {...props} />
};

export default NanoStagedIcon;
