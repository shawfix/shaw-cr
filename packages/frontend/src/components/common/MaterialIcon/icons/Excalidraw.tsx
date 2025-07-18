import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ExcalidrawSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #5c6bc0)" d="m15 1-5 1-9 10 3 3 10-9zm-4 3h1v1h-1zm1 5-3 3 4 3 2-2zM7 4 4 7 2 5 1 1l4 1z"></path>
</svg>
;
};

function ExcalidrawIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ExcalidrawSvg} {...props} />
};

export default ExcalidrawIcon;
