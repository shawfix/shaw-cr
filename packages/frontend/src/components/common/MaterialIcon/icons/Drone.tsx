import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function DroneSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 230" width="1em" height="1em">
  <path fill="var(--material-icon-color, #cfd8dc)" d="m57.01 36.707-.835.834 34.036 34.035c-4.813 7.514-7.584 16.742-7.584 27.239 0 29.18 21.422 48.557 48.557 48.557 10.14 0 19.48-2.706 27.205-7.618l34.21 34.21c-17.726 23.411-45.89 38.151-77.601 38.151-53.627 0-97.114-42.154-97.114-97.114 0-32.685 15.38-60.84 39.125-78.293zm16.188-9.611c12.66-5.927 26.836-9.21 41.799-9.21 53.626 0 97.114 42.155 97.114 97.114 0 15.117-3.29 29.265-9.176 41.833l-30.78-30.78c4.812-7.514 7.584-16.742 7.584-27.239 0-29.18-21.422-48.557-48.557-48.557-10.14 0-19.48 2.706-27.205 7.617zm57.985 100.853c-16.281 0-29.134-11.626-29.134-29.135 0-17.508 12.853-29.134 29.134-29.134s29.134 11.626 29.134 29.134-12.853 29.135-29.134 29.135"></path>
</svg>
;
};

function DroneIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={DroneSvg} {...props} />
};

export default DroneIcon;
