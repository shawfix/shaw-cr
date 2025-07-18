import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function HuffSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <rect width="16" height="2" x="8" y="28" fill="#cfd8dc" rx=".5"></rect>
  <path fill="var(--material-icon-color, #cfd8dc)" d="M12 23v1h-1a1 1 0 0 0-1 1v1h12v-1a1 1 0 0 0-1-1h-1v-1a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1m11.916-11.126L20 6V4h2a9.24 9.24 0 0 0-6.176-1.999 8.063 8.063 0 0 0-7.822 8.2 12.3 12.3 0 0 0 .63 3.696L10 18v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-.586a1 1 0 0 0-.293-.707L16 12h2l2.874 1.916a.5.5 0 0 0 .277.084H23.5a.5.5 0 0 0 .5-.5v-1.349a.5.5 0 0 0-.084-.277M20 10h-1a1 1 0 0 1-1-1V8h1a1 1 0 0 1 1 1Z"></path>
</svg>
;
};

function HuffIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={HuffSvg} {...props} />
};

export default HuffIcon;
