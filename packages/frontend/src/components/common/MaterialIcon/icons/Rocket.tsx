import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function RocketSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ef5350)" d="M12 26c-1.71 1.905-7.64 2.149-7.93 1.937l-.004.003-.002-.005-.005-.002.004-.003C3.85 27.64 4.1 21.715 6 20ZM29.64 7.908c-.655 2.69-1.681 5.64-5.64 10.092l-.789 4.749a4 4 0 0 1-1.116 2.171l-4.863 4.868A.72.72 0 0 1 16 29.277v-6.23L9 16H2.723a.721.721 0 0 1-.511-1.232L7.08 9.905A4 4 0 0 1 9.25 8.79L14 8c4.453-3.959 7.402-4.985 10.092-5.64a11.1 11.1 0 0 1 3.642-.329 3.1 3.1 0 0 1 1.72.515 3.1 3.1 0 0 1 .515 1.72 11.1 11.1 0 0 1-.33 3.642ZM26 10a4 4 0 1 0-4 4 4 4 0 0 0 4-4"></path>
</svg>
;
};

function RocketIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={RocketSvg} {...props} />
};

export default RocketIcon;
