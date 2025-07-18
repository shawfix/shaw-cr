import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function SconsSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #c62828)" d="M1 12h6v3H1Zm8 0h6v3H9ZM1 8h3v3H1Zm11 0h3v3h-3ZM5 1h6v3H5Z"></path>
  <path fill="var(--material-icon-color, #b0bec5)" d="M8 11 6 8h1V5h2v3h1Z"></path>
</svg>
;
};

function SconsIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={SconsSvg} {...props} />
};

export default SconsIcon;
