import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function OtneSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1em" height="1em">
  <g fill="#00c853">
    <path d="M512 254.16A257.84 257.84 0 0 0 254.16 512 257.84 257.84 0 0 0 512 769.841a257.84 257.84 0 0 0 257.841-257.84 257.84 257.84 0 0 0-257.84-257.842zM941.74 512A429.74 429.74 0 0 1 512 941.74 429.74 429.74 0 0 1 82.262 512 429.74 429.74 0 0 1 512 82.262 429.74 429.74 0 0 1 941.74 512"></path>
    <path d="M695.945 450.836h-92.08l-.005 122.318h92.084zm-122.854-122.78H450.92v367.89h122.17zm-152.942 122.78h-92.084v122.318h92.08z"></path>
  </g>
</svg>
;
};

function OtneIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={OtneSvg} {...props} />
};

export default OtneIcon;
