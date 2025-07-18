import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function LockSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ffd54f)" d="M25 12h-3V8a6 6 0 0 0-12 0v4H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1M14 8a2 2 0 0 1 4 0v4h-4Zm2 17a4 4 0 1 1 4-4 4 4 0 0 1-4 4"></path>
</svg>
;
};

function LockIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={LockSvg} {...props} />
};

export default LockIcon;
