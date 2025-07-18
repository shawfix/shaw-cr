import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function BuckSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <g fill="#0277bd">
    <path d="M7.488 2.94h-1.51v4.273L7.82 9.054H5.61L3.197 6.642V2.94H1.595v4.383l3.278 3.278h4.42l1.584 1.584H6.64l3.573 3.683-5.23 5.194h2.062l5.23-5.267-1.989-1.99H20.86v.664l-4.567 2.725-3.831 3.868h2.173l2.615-2.652 5.157-3.094v-3.13h-4.862l-1.658-1.658 1.879-1.879V4.45H16.2v3.5l-1.528 1.51-1.363-1.428V4.45h-1.473v4.273l3.445 3.462h-2.102L7.488 6.55z"></path>
    <path d="M15.48 14.763h-2.062l.995 1.068z"></path>
  </g>
</svg>
;
};

function BuckIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={BuckSvg} {...props} />
};

export default BuckIcon;
