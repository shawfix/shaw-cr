import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function GridsomeSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <circle cx="16" cy="16" r="2" fill="#00bfa5"></circle>
  <path fill="var(--material-icon-color, #00bfa5)" d="M27.96 14H22v4h3.798A9.998 9.998 0 1 1 18 6.202V2.159A13.994 13.994 0 1 0 30 16v-.02A2.02 2.02 0 0 0 27.96 14"></path>
</svg>
;
};

function GridsomeIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={GridsomeSvg} {...props} />
};

export default GridsomeIcon;
