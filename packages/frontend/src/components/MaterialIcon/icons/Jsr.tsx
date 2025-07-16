import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function JsrSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #fdd835)" d="M2 7h1v2h1V5h1v5H2m4-5h4v1H7v1.5h3V11H6v-1h3V8.5H6M11 6h3v2.5h-1V7h-1v4h-1"></path>
</svg>
;
};

function JsrIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={JsrSvg} {...props} />
};

export default JsrIcon;
