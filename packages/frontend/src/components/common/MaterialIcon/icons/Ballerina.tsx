import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function BallerinaSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #00bfa5)" d="m14 12-6-2V2h6Zm-6 0 4 2.058L8 16Zm0 18V18l6-2v4l-2 10Zm10-18 6-2V2h-6Zm6 0-4 2.058L24 16Zm0 18V18l-6-2v4l2 10Z"></path>
</svg>
;
};

function BallerinaIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={BallerinaSvg} {...props} />
};

export default BallerinaIcon;
