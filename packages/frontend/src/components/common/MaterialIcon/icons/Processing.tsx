import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ProcessingSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="var(--material-icon-color, none)" viewBox="0 0 32 32" width="1em" height="1em">
  <path stroke="#536dfe" stroke-width="8" d="M10 26c16 0 16-20 0-20"></path>
</svg>
;
};

function ProcessingIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ProcessingSvg} {...props} />
};

export default ProcessingIcon;
