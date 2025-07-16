import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function VelocitySvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="1em" height="1em">
  <path fill="var(--material-icon-color, #0288d1)" d="M150 61.553A88.446 88.446 0 0 0 61.553 150 88.446 88.446 0 0 0 150 238.446 88.446 88.446 0 0 0 238.446 150 88.446 88.446 0 0 0 150 61.553m.011 25.082a63.353 63.353 0 0 1 63.353 63.353 63.353 63.353 0 0 1-63.353 63.353 63.353 63.353 0 0 1-63.353-63.353 63.353 63.353 0 0 1 63.353-63.353" paint-order="fill markers stroke"></path>
  <path fill="var(--material-icon-color, #0288d1)" d="M45.008 193.096 12.213 225.89l32.795 32.795V238.44h104.99v-25.098H45.008zM74.088 12.21 41.293 45.006h20.246v104.99h25.098V45.007h20.246zm180.901 29.093V61.55h-104.99v25.097h104.99v20.246L287.784 74.1zM213.32 149.998V254.99h-20.245l32.794 32.795 32.795-32.795h-20.246V150z"></path>
</svg>
;
};

function VelocityIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={VelocitySvg} {...props} />
};

export default VelocityIcon;
