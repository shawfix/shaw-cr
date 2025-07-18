import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function QuokkaSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #FF6D00)" d="M8 2v6H2v6h12V2z" paint-order="fill markers stroke"></path>
</svg>
;
};

function QuokkaIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={QuokkaSvg} {...props} />
};

export default QuokkaIcon;
