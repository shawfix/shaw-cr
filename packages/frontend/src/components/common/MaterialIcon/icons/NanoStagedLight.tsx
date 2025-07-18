import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function NanoStagedLightSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #546e7a)" d="M11.999 1.481A10.495 10.495 0 0 0 1.48 11.999c0 5.828 4.69 10.52 10.518 10.52 5.827 0 10.52-4.693 10.52-10.52a10.496 10.496 0 0 0-10.52-10.518zM7.953 6.899a.2.2 0 0 1 .109.028l5.662 3.27a.21.21 0 0 0 .212 0l2.002-1.157a.21.21 0 0 1 .317.18v7.67a.21.21 0 0 1-.317.183l-5.662-3.27a.21.21 0 0 0-.21 0l-2.004 1.16a.21.21 0 0 1-.315-.184V7.11a.21.21 0 0 1 .206-.21z"></path>
</svg>
;
};

function NanoStagedLightIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={NanoStagedLightSvg} {...props} />
};

export default NanoStagedLightIcon;
