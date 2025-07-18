import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function SpwnSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <g transform="translate(13.512 10.42)scale(.06153)">
    <circle cx="30.125" cy="-29" r="110.12" fill="#e040fb"></circle>
    <circle cx="-79.266" cy="80.375" r="110.12" fill="#00bfa5"></circle>
    <path fill="#f5f5f5" d="m30.875-29.75-55.437-.001-55.437.001 27.624 27.624-57.45 57.45 56.063 56.063 57.45-57.45 27.188 27.188V25.686z" data-mit-no-recolor></path>
  </g>
</svg>
;
};

function SpwnIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={SpwnSvg} {...props} />
};

export default SpwnIcon;
