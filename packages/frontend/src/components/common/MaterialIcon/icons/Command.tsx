import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function CommandSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #90a4ae)" d="M24 18h-3v-4h3a6 6 0 1 0-6-6v3h-4V8a6 6 0 1 0-6 6h3v4H8a6 6 0 1 0 6 6v-3h4v3a6 6 0 1 0 6-6M21 8a3 3 0 1 1 3 3h-3ZM11 24a3 3 0 1 1-3-3h3Zm0-13H8a3 3 0 1 1 3-3Zm7 7h-4v-4h4Zm6 9a3.003 3.003 0 0 1-3-3v-3h3a3 3 0 0 1 0 6"></path>
</svg>
;
};

function CommandIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={CommandSvg} {...props} />
};

export default CommandIcon;
