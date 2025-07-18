import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function WakatimeLightSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="var(--material-icon-color, none)" viewBox="0 0 340 340" width="1em" height="1em">
  <path stroke="#455a64" stroke-width="33.39" d="M170 44.788c-69.154 0-125.212 56.058-125.212 125.212s56.058 125.213 125.213 125.213S295.212 239.155 295.212 170 239.155 44.788 170 44.788z"></path>
  <path fill="var(--material-icon-color, #455a64)" d="M186.846 206.343c-1.205 1.588-3.011 2.61-5.035 2.61a6 6 0 0 1-.591-.034 7 7 0 0 1-.7-.109 6.7 6.7 0 0 1-1.15-.385 8 8 0 0 1-.547-.28 6.6 6.6 0 0 1-.856-.591 7 7 0 0 1-.42-.367 8 8 0 0 1-.586-.64 7.5 7.5 0 0 1-.754-1.144l-7.378-11.854-7.374 11.854c-1.157 2.107-3.249 3.55-5.652 3.55-2.412 0-4.514-1.454-5.636-3.607l-32.252-46.985c-1.06-1.278-1.712-2.973-1.712-4.844 0-3.96 2.911-7.173 6.501-7.173 2.324 0 4.358 1.35 5.508 3.375l27.224 40.228 7.663-12.477c1.104-2.224 3.248-3.734 5.71-3.734 2.252 0 4.238 1.266 5.404 3.188l7.903 12.972 42.712-61.15c1.16-1.967 3.164-3.269 5.45-3.269 3.59 0 6.5 3.212 6.5 7.172 0 1.73-.553 3.317-1.478 4.555z"></path>
</svg>
;
};

function WakatimeLightIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={WakatimeLightSvg} {...props} />
};

export default WakatimeLightIcon;
