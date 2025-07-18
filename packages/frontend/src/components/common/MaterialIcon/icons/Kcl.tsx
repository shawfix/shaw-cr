import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function KclSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <g stroke-width=".948">
    <path fill="#9ccc65" d="m2 3 5.087 1.007L9 12l-5-1Z"></path>
    <path fill="#e91e63" d="m3.957 11.996 5.087 1.007 1.912 7.993-5-1z"></path>
    <path fill="#26c6da" d="m10 13 5-2 7 5-5 2z"></path>
    <path fill="#ffcc80" d="m10 12 7-3 1-5-7 3z"></path>
  </g>
</svg>
;
};

function KclIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={KclSvg} {...props} />
};

export default KclIcon;
