import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function WepySvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #4caf50)" d="M16 2A14 14 0 0 0 2 16v12a2 2 0 0 0 2 2h12a14 14 0 0 0 0-28m0 24a10 10 0 1 1 10-10 10.01 10.01 0 0 1-10 10"></path>
</svg>
;
};

function WepyIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={WepySvg} {...props} />
};

export default WepyIcon;
