import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function LibSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="var(--material-icon-color, none)" viewBox="0 0 24 24" width="1em" height="1em">
  <path d="M0 0h24v24H0z"></path>
  <path fill="var(--material-icon-color, #8bc34a)" d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H8V4h12zM10 9h8v2h-8zm0 3h4v2h-4zm0-6h8v2h-8z"></path>
</svg>
;
};

function LibIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={LibSvg} {...props} />
};

export default LibIcon;
