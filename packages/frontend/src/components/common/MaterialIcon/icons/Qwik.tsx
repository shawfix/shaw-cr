import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function QwikSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #29b6f6)" d="m19.26 22.182-3.657-3.636-.056.008v-.04l-7.776-7.678 1.916-1.85-1.126-6.46-5.341 6.62c-.91.917-1.078 2.408-.423 3.508l3.337 5.534a2.8 2.8 0 0 0 2.435 1.356l1.653-.016z"></path>
  <path fill="var(--material-icon-color, #b388ff)" d="m21.255 9.018-.734-1.356-.383-.693-.152-.272-.016.016-2.012-3.484a2.82 2.82 0 0 0-2.467-1.411l-1.765.047-5.261.016A2.82 2.82 0 0 0 6.054 3.27L2.852 9.616 8.577 2.51l7.505 8.245-1.334 1.347.799 6.451.008-.016v.016h-.016l.016.016.623.606 3.025 2.958c.128.12.336-.024.248-.175l-1.868-3.676 3.257-6.02.104-.12c.04-.048.08-.096.112-.143.638-.87.726-2.034.2-2.983z"></path>
  <path fill="var(--material-icon-color, #eceff1)" d="M16.106 10.724 8.576 2.52l1.07 6.427-1.916 1.858 7.8 7.742-.702-6.426z"></path>
</svg>
;
};

function QwikIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={QwikSvg} {...props} />
};

export default QwikIcon;
