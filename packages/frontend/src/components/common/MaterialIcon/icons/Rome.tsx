import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function RomeSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #546e7a)" d="M9.875 5.409A14.02 14.02 0 0 0 2.01 17.48a.51.51 0 0 0 .508.519H5.52a.495.495 0 0 0 .491-.481 10.01 10.01 0 0 1 5.273-8.337.494.494 0 0 0 .243-.592l-.958-2.882a.505.505 0 0 0-.694-.3Zm11.556.299-.958 2.882a.494.494 0 0 0 .243.592 10.01 10.01 0 0 1 5.273 8.337.495.495 0 0 0 .49.481h3.004a.51.51 0 0 0 .508-.519A14.02 14.02 0 0 0 22.125 5.41a.505.505 0 0 0-.694.299ZM26 20.5v9a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5m-24 0v9a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5"></path>
  <path fill="var(--material-icon-color, #ffc400)" d="M16.13 10h-.26A7.87 7.87 0 0 0 8 17.87V29.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V17.87A3.88 3.88 0 0 1 15.87 14h.26A3.88 3.88 0 0 1 20 17.87V29.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V17.87A7.87 7.87 0 0 0 16.13 10m1.51-2h-3.28a.5.5 0 0 1-.474-.342l-1.667-5A.5.5 0 0 1 12.694 2h6.612a.5.5 0 0 1 .475.658l-1.667 5A.5.5 0 0 1 17.64 8"></path>
</svg>
;
};

function RomeIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={RomeSvg} {...props} />
};

export default RomeIcon;
