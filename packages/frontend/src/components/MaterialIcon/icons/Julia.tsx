import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function JuliaSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="1em" height="1em">
  <g transform="translate(.21 -247.01)">
    <circle cx="13.497" cy="281.63" r="9.555" fill="#C62828"></circle>
    <circle cx="36.081" cy="281.63" r="9.555" fill="#7E57C2"></circle>
    <circle cx="24.722" cy="262.39" r="9.555" fill="#388E3C"></circle>
  </g>
</svg>
;
};

function JuliaIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={JuliaSvg} {...props} />
};

export default JuliaIcon;
