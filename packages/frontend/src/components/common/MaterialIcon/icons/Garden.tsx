import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function GardenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <g stroke-width=".752">
    <path fill="#80cbc4" d="M14 14V2h-1.716v12z"></path>
    <path fill="#80deea" d="M10.58 14V2H8.865v12z"></path>
    <path fill="#26a69a" d="M10.58 8.98V2H8.865v6.98z"></path>
    <path fill="#ff80ab" d="M10.608 10.034v-1.65H8.844v1.65z"></path>
    <path fill="#1565c0" d="M7.145 14V6.377H5.452V14z"></path>
    <path fill="#43a047" d="M5.451 14V2H3.716v12z"></path>
    <path fill="#4db6ac" d="M3.716 14V2H2v12z"></path>
    <path fill="#0288d1" d="M7.148 6.477V2H5.45v4.477z"></path>
    <path fill="#ff80ab" d="M7.145 8.162V6.504H5.452v1.658z"></path>
    <path fill="#4caf50" d="M12.296 14V2h-1.715v12z"></path>
    <path fill="#00bfa5" d="M8.864 14V2H7.148v12z"></path>
  </g>
</svg>
;
};

function GardenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={GardenSvg} {...props} />
};

export default GardenIcon;
