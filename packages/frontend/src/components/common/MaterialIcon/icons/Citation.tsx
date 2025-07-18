import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function CitationSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1em" height="1em">
  <path fill="var(--material-icon-color, #1e88e5)" d="M256 192c-106.039 0-192 85.961-192 192 .189 103.43 82.273 188.122 185.646 191.545L128 832h128l173.473-365.715C441.746 440.412 447.323 412.44 448 384c0-106.039-85.961-192-192-192m512 0c-106.039 0-192 85.961-192 192 .189 103.43 82.273 188.122 185.646 191.545L640 832h128l173.473-365.715C953.746 440.412 959.323 412.44 960 384c0-106.039-85.961-192-192-192"></path>
</svg>
;
};

function CitationIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={CitationSvg} {...props} />
};

export default CitationIcon;
