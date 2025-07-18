import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function AmplifySvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ff9800)" d="M14 10 5 28h12l-2-4h-4l3-6 5 10h4zm1-2 2-4 12 24h-4l-8-16z"></path>
</svg>
;
};

function AmplifyIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={AmplifySvg} {...props} />
};

export default AmplifyIcon;
