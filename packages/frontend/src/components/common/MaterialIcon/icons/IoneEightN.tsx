import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function IoneEightNSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #7986cb)" d="M24 14h-2l-6 14h3l.857-2h6.286L27 28h3Zm-2.856 9L23 18.67 24.856 23ZM12 6V4h-2v2H2v2h11.959a13.4 13.4 0 0 1-2.876 7.07A41 41 0 0 1 8.786 12H6.408a42 42 0 0 0 3.404 4.685 64 64 0 0 1-5.49 5.579l1.355 1.472a68 68 0 0 0 5.454-5.523 49 49 0 0 0 3.279 3.342l1.42-1.42a50 50 0 0 1-3.415-3.498A15.34 15.34 0 0 0 15.97 8H20V6Z"></path>
</svg>
;
};

function IoneEightNIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={IoneEightNSvg} {...props} />
};

export default IoneEightNIcon;
