import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function CakeSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ff7043)" d="M16 10a2.847 2.847 0 0 0 3-2.663v-.003a2.32 2.32 0 0 0-.435-1.372L16 2l-2.565 3.96A2.33 2.33 0 0 0 13 7.331 2.847 2.847 0 0 0 15.998 10zm6.134 13.376L20.708 22l-1.44 1.375a4.917 4.917 0 0 1-6.52 0L11.334 22l-1.466 1.375A4.79 4.79 0 0 1 4 23.871V29a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-5.129a4.79 4.79 0 0 1-5.866-.497M24 14h-6.667v-2h-2.666v2H8a4.145 4.145 0 0 0-4 4.09v1.415A2.56 2.56 0 0 0 6.614 22a2.53 2.53 0 0 0 1.84-.726l2.88-2.71 2.813 2.71a2.764 2.764 0 0 0 3.693 0l2.826-2.71 2.868 2.71A2.649 2.649 0 0 0 28 19.505V18.09A4.145 4.145 0 0 0 24 14"></path>
</svg>
;
};

function CakeIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={CakeSvg} {...props} />
};

export default CakeIcon;
