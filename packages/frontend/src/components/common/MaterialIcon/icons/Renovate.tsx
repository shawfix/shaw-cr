import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function RenovateSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ffb300)" d="m13.061 3.722-.707-.707a1 1 0 0 0-1.414 0L2.454 11.5a1 1 0 0 0 0 1.414l2.829 2.829a1 1 0 0 0 1.414 0l8.485-8.486a1 1 0 0 0 0-1.414l-.707-.707.707-.707 2.829 2.828-7.071 7.071 7.778 7.779a1 1 0 0 0 1.414 0l1.414-1.415a1 1 0 0 0 0-1.414l-6.364-6.364 5.657-5.657L15.182 1.6z"></path>
</svg>
;
};

function RenovateIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={RenovateSvg} {...props} />
};

export default RenovateIcon;
