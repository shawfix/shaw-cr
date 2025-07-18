import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function HardhatSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #FFD600)" d="M9.87 12.15 9 6.46a9.9 9.9 0 0 1 6 0l-.87 5.69c-.07.49-.5.85-1 .85h-2.27a1 1 0 0 1-.99-.85M22 16c0-.79-.47-1.5-1.2-1.83A9.08 9.08 0 0 0 17 8.5l-1.76 4.84c-.14.4-.52.66-.94.66H9.7c-.42 0-.8-.26-.94-.66L7 8.5a9.1 9.1 0 0 0-3.8 5.66C2.47 14.5 2 15.2 2 16l6.45 1.84c.36.1.73.16 1.1.16h4.88c.37 0 .74-.06 1.1-.16z"></path>
</svg>
;
};

function HardhatIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={HardhatSvg} {...props} />
};

export default HardhatIcon;
