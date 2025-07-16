import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function HaskellSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="1em" height="1em">
  <g stroke-width="2.422">
    <path fill="#ef5350" d="m23.928 240.5 59.94-89.852-59.94-89.855h44.955l59.94 89.855-59.94 89.852z"></path>
    <path fill="#ffa726" d="m83.869 240.5 59.94-89.852-59.94-89.855h44.955l119.88 179.71h-44.95l-37.46-56.156-37.468 56.156z"></path>
    <path fill="#ffee58" d="m228.72 188.08-19.98-29.953h69.93v29.956h-49.95zm-29.97-44.924-19.98-29.953h99.901v29.953z"></path>
  </g>
</svg>
;
};

function HaskellIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={HaskellSvg} {...props} />
};

export default HaskellIcon;
