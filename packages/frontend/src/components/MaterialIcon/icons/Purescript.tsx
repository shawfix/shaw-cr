import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function PurescriptSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #42a5f5)" d="m31.447 12.569-6.035-6.038-1.627 1.628 5.22 5.223-5.22 5.223 1.627 1.628 6.035-6.036a1.15 1.15 0 0 0 0-1.628M8.216 13.928l-1.628-1.629L.55 18.335a1.155 1.155 0 0 0 0 1.628L6.588 26l1.628-1.628-5.223-5.222ZM10 22h12l2 2H12z"></path>
  <path fill="var(--material-icon-color, #42a5f5)" d="M22 18H10l2-2h12zm0-6H10l-2-2h12z"></path>
</svg>
;
};

function PurescriptIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={PurescriptSvg} {...props} />
};

export default PurescriptIcon;
