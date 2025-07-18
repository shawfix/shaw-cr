import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function StencilSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #448aff)" d="m8 12-6 8h22l6-8zm6.5-8L10 10h11l4.5-6zm3 24 4.5-6H11l-4.5 6z"></path>
</svg>
;
};

function StencilIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={StencilSvg} {...props} />
};

export default StencilIcon;
