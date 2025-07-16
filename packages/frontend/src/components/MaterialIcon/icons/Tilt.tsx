import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function TiltSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #4caf50)" d="M14 5v22a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V13a1 1 0 0 1 1-1h4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H15a1 1 0 0 0-1 1M4.47 7.706l5.694-3.559A1.2 1.2 0 0 1 12 5.165V11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8.554a1 1 0 0 1 .47-.848"></path>
</svg>
;
};

function TiltIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={TiltSvg} {...props} />
};

export default TiltIcon;
