import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ArchitectureSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="var(--material-icon-color, none)" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #66BB6A)" d="M6.278 22 6 19.556l3.167-8.723a4.37 4.37 0 0 0 1.944 1.056l-3.055 8.389zm11.666 0-1.777-1.722-3.056-8.39q.556-.138 1.042-.402a4.4 4.4 0 0 0 .903-.653l3.166 8.723zm-5.833-11.111q-1.389 0-2.361-.972-.972-.973-.972-2.361 0-1.084.624-1.932.626-.846 1.598-1.18V2h2.222v2.444a3.27 3.27 0 0 1 1.598 1.18q.624.849.624 1.932 0 1.389-.972 2.36-.972.973-2.36.973Zm0-2.222q.473 0 .792-.32t.32-.791q0-.473-.32-.793a1.08 1.08 0 0 0-.792-.319q-.472 0-.791.32t-.32.792.32.79q.319.32.791.32Z"></path>
</svg>
;
};

function ArchitectureIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ArchitectureSvg} {...props} />
};

export default ArchitectureIcon;
