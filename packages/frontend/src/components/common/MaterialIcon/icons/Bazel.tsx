import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function BazelSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em">
  <path fill="var(--material-icon-color, #81c784)" d="m153.491 50.983 102.508 102.508-102.508 102.508L50.983 153.491z"></path>
  <path fill="var(--material-icon-color, #43a047)" d="M50.983 153.491v102.508l102.508 102.508V255.999z"></path>
  <path fill="var(--material-icon-color, #81c784)" d="m358.507 50.983 102.508 102.508-102.508 102.508-102.508-102.508z"></path>
  <path fill="var(--material-icon-color, #43a047)" d="M461.015 153.491v102.508L358.507 358.507V255.999zm-205.016 0 102.508 102.508-102.508 102.508-102.508-102.508z"></path>
  <path fill="var(--material-icon-color, #2e7d32)" d="M255.999 358.507v102.508L153.491 358.507V255.999z"></path>
  <path fill="var(--material-icon-color, #1b5e20)" d="m255.999 358.507 102.508-102.508v102.508L255.999 461.015z"></path>
</svg>
;
};

function BazelIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={BazelSvg} {...props} />
};

export default BazelIcon;
