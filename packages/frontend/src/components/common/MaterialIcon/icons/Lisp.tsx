import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function LispSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ef5350)" d="M16 2a14 14 0 1 0 14 14A14.003 14.003 0 0 0 16 2m8.93 20.43a11 11 0 0 1-7.19 4.43 6.094 6.094 0 0 1-4.79-5.9v-.05a5 5 0 0 1 .04-.66 7.95 7.95 0 0 1 2.3-4.95 5.99 5.99 0 0 0-2.23-9.9 11.004 11.004 0 0 1 11.87 17.03"></path>
</svg>
;
};

function LispIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={LispSvg} {...props} />
};

export default LispIcon;
