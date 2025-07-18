import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function TemplSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ffd54f)" d="M8.125 24.313 1 16l7.125-8.313 3 2.625L6.25 16l4.875 5.688ZM24 7.687 31.125 16 24 24.313l-3-2.625L25.875 16 21 10.312ZM16 4l-4 24h4l4-24z"></path>
</svg>
;
};

function TemplIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={TemplSvg} {...props} />
};

export default TemplIcon;
