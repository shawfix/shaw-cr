import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FsharpSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="1em" height="1em">
  <path fill="var(--material-icon-color, #0288D1)" d="m236.249 36.066-213.94 213.94 213.94 213.94v-84.36l-129.7-129.7 129.7-129.7z"></path>
  <path fill="var(--material-icon-color, #0288D1)" d="m236.249 156.017-93.622 93.62 93.622 93.622z"></path>
  <path fill="var(--material-icon-color, #00B8D4)" d="m263.759 36.047 213.94 213.94-213.94 213.94v-84.36l129.7-129.7-129.7-129.7z"></path>
</svg>
;
};

function FsharpIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FsharpSvg} {...props} />
};

export default FsharpIcon;
