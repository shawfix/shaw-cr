import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function TriggerSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="var(--material-icon-color, none)" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #4CAF50)" fill-rule="evenodd" d="M11.158 13.51 16 5l12 21.09H4l4.842-8.51 3.425 2.007-1.416 2.49h10.298L16 13.027l-1.417 2.49z" clip-rule="evenodd"></path>
</svg>
;
};

function TriggerIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={TriggerSvg} {...props} />
};

export default TriggerIcon;
