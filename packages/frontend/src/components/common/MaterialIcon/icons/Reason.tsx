import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ReasonSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #f44336)" d="M4 4v24h24V4Zm14 15.5a.5.5 0 0 1-.5.5H16v2h1a1 1 0 0 1 1 1v3h-2v-4h-4v4h-1a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h1.5a.5.5 0 0 1 .5.5Zm8-1.5h-4v2h4v2h-4v2h4v2h-5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h5Z"></path>
  <path fill="var(--material-icon-color, #f44336)" d="M12 18h4v2h-4z"></path>
</svg>
;
};

function ReasonIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ReasonSvg} {...props} />
};

export default ReasonIcon;
