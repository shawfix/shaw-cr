import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function KustoSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #1e88e5)" d="M10 1C7.23 1 5 3.23 5 6v5h5c2.77 0 5-2.23 5-5s-2.23-5-5-5m1.5 3H13v5h-1.5zm-5 1H8v4H6.5zM9 6h1.5v3H9zM1 8v3h3V8zm0 4v2.498a.5.5 0 0 0 .502.502H4v-3zm4 0v3h3v-3z"></path>
</svg>
;
};

function KustoIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={KustoSvg} {...props} />
};

export default KustoIcon;
