import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ColoredpetrinetsSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <rect width="3" height="1" x="9" y="7.5" fill="#b0bec5" rx="0" ry=".032"></rect>
  <rect width="3" height="1" x="4" y="7.5" fill="#b0bec5" rx="0" ry=".032"></rect>
  <rect width="4" height="4" x="6" y="6" fill="#00bcd4" rx=".59"></rect>
  <circle cx="3" cy="8" r="2" fill="#4caf50"></circle>
  <circle cx="13" cy="8" r="2" fill="#ff9800"></circle>
</svg>
;
};

function ColoredpetrinetsIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ColoredpetrinetsSvg} {...props} />
};

export default ColoredpetrinetsIcon;
