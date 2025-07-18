import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function YangSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #42a5f5)" d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8 8 8 0 0 0 8 8 4 4 0 0 1-4-4 4 4 0 0 1 4-4 4 4 0 0 0 4-4 4 4 0 0 0-4-4m0 2.5A1.5 1.5 0 0 1 13.5 8 1.5 1.5 0 0 1 12 9.5 1.5 1.5 0 0 1 10.5 8 1.5 1.5 0 0 1 12 6.5m0 8a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5"></path>
</svg>
;
};

function YangIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={YangSvg} {...props} />
};

export default YangIcon;
