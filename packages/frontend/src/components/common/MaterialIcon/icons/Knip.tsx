import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function KnipSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #EF6C00)" d="m18.957 2.998-5.985 5.984 1.995 1.995 6.983-6.982v-.998m-9.975 9.477a.5.5 0 1 1 0-.998.5.5 0 0 1 0 .998M5.99 19.955a1.995 1.995 0 1 1 0-3.99 1.995 1.995 0 0 1 0 3.99m0-11.97a1.995 1.995 0 1 1 0-3.99 1.995 1.995 0 0 1 0 3.99m3.63-.36a3.9 3.9 0 0 0 .36-1.635 3.99 3.99 0 1 0-3.99 3.99c.589 0 1.137-.13 1.636-.36l2.354 2.355-2.354 2.354a3.9 3.9 0 0 0-1.636-.359 3.99 3.99 0 1 0 3.99 3.99c0-.588-.13-1.137-.36-1.636l2.355-2.354 6.982 6.982h2.993v-.997z"></path>
</svg>
;
};

function KnipIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={KnipSvg} {...props} />
};

export default KnipIcon;
