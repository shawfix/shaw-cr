import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function UvSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #E040FB)" d="M2 2v11c0 .5.5 1 1 1h8c.5 0 1-.5 1-1h1v1h1V2H8v8H7V2z"></path>
</svg>
;
};

function UvIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={UvSvg} {...props} />
};

export default UvIcon;
