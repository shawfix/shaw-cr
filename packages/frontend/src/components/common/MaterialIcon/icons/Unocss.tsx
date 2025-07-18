import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function UnocssSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <circle cx="24" cy="24" r="6" fill="#78909c"></circle>
  <path fill="var(--material-icon-color, #546e7a)" d="M2 18v6a6 6 0 0 0 12 0v-6Z"></path>
  <path fill="var(--material-icon-color, #b0bec5)" d="M30 14V8a6 6 0 0 0-12 0v6Z"></path>
</svg>
;
};

function UnocssIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={UnocssSvg} {...props} />
};

export default UnocssIcon;
