import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FaviconSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ffd54f)" d="m16 24 10 6-4-10 8-8-10-.032L16 2l-4 10H2l8 8-4 10Z"></path>
</svg>
;
};

function FaviconIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FaviconSvg} {...props} />
};

export default FaviconIcon;
