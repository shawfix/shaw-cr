import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function JarSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #f44336)" d="M22 10h2v4h-2z"></path>
  <path fill="var(--material-icon-color, #f44336)" d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-2 12a2 2 0 0 1-2 2h-2v4a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4V8h18a2 2 0 0 1 2 2Z"></path>
</svg>
;
};

function JarIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={JarSvg} {...props} />
};

export default JarIcon;
