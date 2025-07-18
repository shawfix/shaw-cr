import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function CdsSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <g fill="#0288d1">
    <rect width="4" height="1" x="7" y="9" ry=".5"></rect>
    <rect width="3" height="1" x="8" y="11" ry=".5"></rect>
    <rect width="4" height="1" x="7" y="13" ry=".5"></rect>
    <path d="m5 9-1 1 1.5 1.5L4 13l1 1 2.5-2.5z"></path>
    <path d="M6 2a3 3 0 0 0-2.598 1.5 3 3 0 0 0-.187 2.607 3 3 0 0 0-1.514.965 3 3 0 0 0-.42 3.196A3 3 0 0 0 4 12v-1a2 2 0 0 1-2-2 2 2 0 0 1 2-2 2 2 0 0 1 .515.076l.159-.591A2 2 0 0 1 4 5a2 2 0 0 1 2-2 2 2 0 0 1 2 2l.594.594A2 2 0 0 1 10 5a2 2 0 0 1 2 2 2 2 0 0 1 2 2 2 2 0 0 1-2 2v1a3 3 0 0 0 2.898-2.223A3 3 0 0 0 13.5 6.402a3 3 0 0 0-.63-.267 3 3 0 0 0-1.722-1.906 3 3 0 0 0-2.252-.014 3 3 0 0 0-2.119-2.113A3 3 0 0 0 6 2"></path>
  </g>
</svg>
;
};

function CdsIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={CdsSvg} {...props} />
};

export default CdsIcon;
