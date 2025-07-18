import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function AdobeSwcSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #e53935)" d="M4 5v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1m20 7c-2.926 0-4.21.722-5.012 2H22v4h-4.582C16.34 20.857 14.393 24 8 24v-4c4.559 0 5.14-1.744 6.103-4.632C15.139 12.258 16.559 8 24 8Z"></path>
</svg>
;
};

function AdobeSwcIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={AdobeSwcSvg} {...props} />
};

export default AdobeSwcIcon;
