import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function EpubSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #8bc34a)" d="M8 12.401 3.601 8 8 3.601l1.468 1.466L6.534 8 8 9.467l4.4-4.4-3.833-3.832a.8.8 0 0 0-1.133 0L1.235 7.434a.8.8 0 0 0 0 1.133l6.199 6.199a.8.8 0 0 0 1.133 0l6.199-6.199a.803.803 0 0 0 0-1.133l-.9-.899z"></path>
</svg>
;
};

function EpubIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={EpubSvg} {...props} />
};

export default EpubIcon;
