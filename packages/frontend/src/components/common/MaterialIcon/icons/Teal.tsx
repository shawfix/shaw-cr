import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function TealSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #00acc1)" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m8 14h-8V8h8Z"></path>
</svg>
;
};

function TealIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={TealSvg} {...props} />
};

export default TealIcon;
