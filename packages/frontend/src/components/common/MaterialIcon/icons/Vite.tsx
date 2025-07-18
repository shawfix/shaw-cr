import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ViteSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ffab00)" d="M10 2v16h4v12l9-16h-6l5-12Z"></path>
</svg>
;
};

function ViteIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ViteSvg} {...props} />
};

export default ViteIcon;
