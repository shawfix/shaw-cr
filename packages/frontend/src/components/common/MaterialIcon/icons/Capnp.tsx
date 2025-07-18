import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function CapnpSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #c62828)" d="M17 3V2h4v8h-4c-.085-2.088-.445-4.042-3-4-2.917 0-5 2.51-5 5 0 3 .495 6.981 4.67 6.981 2.906-.26 2.99-2.705 3.33-4.981h4c0 5.806-3.314 9.052-9 9-6.154-.073-8.915-4.685-9-10-.128-6.14 4.568-9.2 10.414-9.65 1.301-.028 2.466 0 3.586.65"></path>
</svg>
;
};

function CapnpIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={CapnpSvg} {...props} />
};

export default CapnpIcon;
