import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function SnowpackSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="-30 -94 700 700" width="1em" height="1em">
  <path fill="var(--material-icon-color, #cfd8dc)" d="M600.53 440.27 344.04 41.29a28.5 28.5 0 0 0-48.092 0L39.458 440.27a28.499 28.499 0 0 0 24.046 43.639h512.98a28.499 28.499 0 0 0 24.046-43.639M320 108.97l75.7 118.45H320l-56.998 56.998-33.842-33.842z"></path>
</svg>
;
};

function SnowpackIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={SnowpackSvg} {...props} />
};

export default SnowpackIcon;
