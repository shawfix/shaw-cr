import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FigmaSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #f4511e)" d="M12 4h4v8h-4a4 4 0 0 1-4-4 4 4 0 0 1 4-4"></path>
  <path fill="var(--material-icon-color, #ff8a65)" d="M20 12h-4V4h4a4 4 0 0 1 4 4 4 4 0 0 1-4 4"></path>
  <path fill="var(--material-icon-color, #7c4dff)" d="M12 12h4v8h-4a4 4 0 0 1-4-4 4 4 0 0 1 4-4"></path>
  <path fill="var(--material-icon-color, #00e676)" d="M12 20h4v4a4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4"></path>
  <rect width="8" height="8" x="16" y="12" fill="#29b6f6" rx="4" transform="rotate(180 20 16)"></rect>
</svg>
;
};

function FigmaIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FigmaSvg} {...props} />
};

export default FigmaIcon;
