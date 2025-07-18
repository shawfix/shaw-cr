import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function SilverstripeSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #0288d1)" d="M10.097 15.432a3.513 3.513 0 0 0 .914-4.882l-2.896 1.982a1.76 1.76 0 0 1-2.44-.46 1.76 1.76 0 0 1 .46-2.443L8.78 7.82l1.697-1.164a3.513 3.513 0 0 0 .915-4.883L8.496 3.759 4.152 6.728l-.005.006a5.266 5.266 0 0 0-1.368 7.324c1.635 2.402 4.917 3.015 7.318 1.374m3.81-6.864-.022.016za3.513 3.513 0 0 0-.914 4.882l2.895-1.982a1.75 1.75 0 0 1 2.442.46 1.756 1.756 0 0 1-.454 2.443l-2.646 1.81-1.702 1.164a3.513 3.513 0 0 0-.915 4.883l2.896-1.982 4.343-2.974a5.27 5.27 0 0 0 1.374-7.324 5.25 5.25 0 0 0-7.319-1.38"></path>
</svg>
;
};

function SilverstripeIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={SilverstripeSvg} {...props} />
};

export default SilverstripeIcon;
