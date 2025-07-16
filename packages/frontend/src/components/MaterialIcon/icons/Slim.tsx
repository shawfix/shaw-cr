import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function SlimSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #f57f17)" d="M23 2H9a7 7 0 0 0-7 7v14a7 7 0 0 0 7 7h14a7 7 0 0 0 7-7V9a7 7 0 0 0-7-7m-5 14-4-6v6H6a10 10 0 0 1 20 0Z"></path>
</svg>
;
};

function SlimIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={SlimSvg} {...props} />
};

export default SlimIcon;
