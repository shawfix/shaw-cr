import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function RacketSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.875 511.824" width="1em" height="1em">
  <path fill="var(--material-icon-color, #0288d1)" d="M416.17 381.6c27.189-34.614 43.405-78.256 43.405-125.685 0-112.466-91.168-203.634-203.634-203.634-24.464 0-47.92 4.319-69.65 12.228 82.671 43.366 192.023 184.854 229.88 317.097z"></path>
  <path fill="var(--material-icon-color, #e53935)" d="M226.77 182.174c-31.766-34.221-67.34-61.4-105.015-79.425-42.569 37.324-69.453 92.102-69.453 153.162 0 51.344 19.009 98.24 50.365 134.06 27.641-83.049 79.607-163.09 124.108-207.8zm37.526 46.176c-44.085 47.512-88.014 130.681-103.913 207.415 28.498 15.172 61.02 23.783 95.561 23.783 35.508 0 68.888-9.097 97.951-25.074-16.752-77.405-48.375-148.294-89.591-206.127z"></path>
</svg>
;
};

function RacketIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={RacketSvg} {...props} />
};

export default RacketIcon;
