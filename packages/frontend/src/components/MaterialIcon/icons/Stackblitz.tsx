import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function StackblitzSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #2196f3)" d="m5 15 8-8H9l2-6-8 8h4z"></path>
</svg>
;
};

function StackblitzIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={StackblitzSvg} {...props} />
};

export default StackblitzIcon;
