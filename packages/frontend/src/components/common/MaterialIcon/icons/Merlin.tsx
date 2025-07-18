import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function MerlinSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 281.25 281.25" width="1em" height="1em">
  <path fill="var(--material-icon-color, #42a5f5)" d="M57.857 40.232h37.088l46.022 140.044 46.7-140.044h36.546l33.57 200.781h-36.547l-21.387-126.796-42.367 126.796h-33.435L82.222 114.217 60.428 241.013H23.476z" aria-label="M"></path>
</svg>
;
};

function MerlinIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={MerlinSvg} {...props} />
};

export default MerlinIcon;
