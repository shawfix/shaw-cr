import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ReplitSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ff6d00)" d="M8 4h8v8H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m8 8h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-8zm-8 8h8v8H8a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2"></path>
</svg>
;
};

function ReplitIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ReplitSvg} {...props} />
};

export default ReplitIcon;
