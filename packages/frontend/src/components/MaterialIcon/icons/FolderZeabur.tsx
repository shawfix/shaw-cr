import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderZeaburSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="var(--material-icon-color, none)" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #7E57C2)" d="m13.8 7.5-1.3-1.1c-.3-.2-.8-.4-1.2-.4H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2H15.1c-.5 0-.9-.1-1.3-.5"></path>
  <g fill="#D1C4E9" clip-path="url(#a)">
    <path d="M20 24h12v6H12v-6h6l8-4H12v-6h20v6z"></path>
    <path d="M26 14H12v6h14zm6 10H20v6h12z"></path>
  </g>
  <defs>
    <clipPath id="a">
      <path d="M12 14h20v16H12z"></path>
    </clipPath>
  </defs>
</svg>
;
};

function FolderZeaburIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderZeaburSvg} {...props} />
};

export default FolderZeaburIcon;
