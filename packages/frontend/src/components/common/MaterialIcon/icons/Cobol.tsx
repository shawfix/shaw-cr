import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function CobolSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #0288d1)" d="M12 0h8v4h-8z"></path>
  <path fill="var(--material-icon-color, #0288d1)" d="M16 5A11 11 0 1 1 5 16 11.01 11.01 0 0 1 16 5m0-3a14 14 0 1 0 14 14A14 14 0 0 0 16 2"></path>
  <path fill="var(--material-icon-color, #0288d1)" d="M32 12v8h-4v-8zm-1.858 12.485-5.657 5.657-2.313-2.313 5.657-5.657zM7.514 30.143l-5.657-5.657 2.814-2.814 5.657 5.657zM12 28h8v4h-8zm15.329-17.672L21.672 4.67l2.814-2.814 5.657 5.657zM3 12v8H0v-8zm7.328-7.329L4.67 10.328 1.857 7.514l5.657-5.657zM20 10h-4a6 6 0 0 0 0 12h4v-4h-4a2 2 0 0 1 0-4h4z"></path>
</svg>
;
};

function CobolIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={CobolSvg} {...props} />
};

export default CobolIcon;
