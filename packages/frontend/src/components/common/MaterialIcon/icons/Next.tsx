import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function NextSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #cfd8dc)" d="M16 2a14 14 0 1 0 5.816 26.723L12 14v9a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2.434a1 1 0 0 1 .857.486l11.491 19.15A14 14 0 0 0 16 2m8 16h-4V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Z"></path>
</svg>
;
};

function NextIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={NextSvg} {...props} />
};

export default NextIcon;
