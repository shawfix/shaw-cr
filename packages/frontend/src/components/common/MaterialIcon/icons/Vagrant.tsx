import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function VagrantSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140.625 140.625" width="1em" height="1em">
  <path fill="var(--material-icon-color, #1565c0)" d="m70.315 132.051 23.269-13.42 36.445-89.24V18.084l-27.142 15.791v9.539L81.16 90.26l-10.846 7.494zM59.449 92.32l10.866-5.365V73.322L54.028 35.326v-10.75l-.112-.064-16.174 9.362v9.539z"></path>
  <path fill="var(--material-icon-color, #2979ff)" d="M86.597 24.463v10.862L70.312 73.32v12.697l-10.862 6.3-21.708-48.904V33.86l16.285-9.38L26.88 8.577l-16.286 9.506v11.644l36.654 89.018 23.064 13.302V98.615l10.847-6.3-.128-.08 21.852-48.824v-9.554l27.148-15.775-16.286-9.507-27.131 15.886z"></path>
</svg>
;
};

function VagrantIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={VagrantSvg} {...props} />
};

export default VagrantIcon;
