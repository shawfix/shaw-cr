import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function AppveyorSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256" width="1em" height="1em">
  <path fill="var(--material-icon-color, #00B8D4)" fill-rule="evenodd" d="M127.646 17.356c61.588 0 110.999 49.414 110.999 110.29a110.64 110.64 0 0 1-110.999 110.999c-60.873 0-110.29-49.414-110.29-110.999 0-60.873 49.414-110.29 110.29-110.29m27.213 131.77c-12.174 15.756-34.375 18.62-49.414 6.446-15.039-11.459-17.187-33.66-5.013-49.414 12.891-15.039 35.091-17.904 50.131-6.445 15.039 12.174 17.187 34.375 4.297 49.414zm-58.723 72.331 42.252-40.82c-15.756 3.58-32.227.716-45.117-10.026-15.039-11.459-21.484-30.795-19.336-48.699L35.98 163.45s-5.013-9.31-6.446-26.498l66.602-52.278c20.052-14.323 47.266-15.04 66.602 0 21.484 17.187 25.781 48.698 10.027 72.33l-48.699 69.466c-7.161 0-21.484-2.149-27.93-5.013"></path>
</svg>
;
};

function AppveyorIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={AppveyorSvg} {...props} />
};

export default AppveyorIcon;
