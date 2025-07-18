import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FlashSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #e53935)" d="M20.314 2c-2.957 0-5.341 1.104-7.122 3.252-1.427 1.752-2.354 3.93-3.164 6.034-1.663 4.283-2.781 6.741-6.342 6.741V22c2.958 0 5.342-1.03 7.122-3.194 1.133-1.383 1.957-3.135 2.634-4.827h4.665v-3.973h-3.061c1.207-2.575 2.546-3.973 5.268-3.973z"></path>
</svg>
;
};

function FlashIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FlashSvg} {...props} />
};

export default FlashIcon;
