import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function DhallSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #78909c)" d="M15.81 2.853 21.148 8.2l-1.54 1.518-5.326-5.327 1.528-1.54M2.853 20.373l6.995-6.962a1.04 1.04 0 0 1 .247-1.033c.42-.42 1.109-.42 1.528 0 .42.43.42 1.108 0 1.528-.28.28-.7.355-1.033.248l-6.962 6.995 11.418-3.82 3.799-6.845-5.317-5.327-6.855 3.799z"></path>
</svg>
;
};

function DhallIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={DhallSvg} {...props} />
};

export default DhallIcon;
