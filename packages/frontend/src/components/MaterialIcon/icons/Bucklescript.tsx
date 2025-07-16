import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function BucklescriptSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #26a69a)" d="M12 18h4v2h-4z"></path>
  <path fill="var(--material-icon-color, #26a69a)" d="M4 4v24h24V4Zm14 15.5a.5.5 0 0 1-.5.5H16v2h1.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H16v1.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V18h1.5a.5.5 0 0 1 .5.5Zm8-2a.5.5 0 0 1-.5.5H22v2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H24v-2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h3.5a.5.5 0 0 1 .5.5Z"></path>
  <path fill="var(--material-icon-color, #26a69a)" d="M12 22h4v2h-4z"></path>
</svg>
;
};

function BucklescriptIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={BucklescriptSvg} {...props} />
};

export default BucklescriptIcon;
