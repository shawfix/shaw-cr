import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function BuildkiteSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #00e676)" d="m12 22-8-4V8l8 4zm8-14v10h4l4-4"></path>
  <path fill="var(--material-icon-color, #00c853)" d="m12 22 8-4V8l-8 4zm8 6 8-4V14l-8 4z"></path>
</svg>
;
};

function BuildkiteIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={BuildkiteSvg} {...props} />
};

export default BuildkiteIcon;
