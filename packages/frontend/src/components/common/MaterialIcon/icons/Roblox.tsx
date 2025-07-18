import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function RobloxSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="1em" height="1em">
  <path fill="var(--material-icon-color, #42a5f5)" d="m127.87 38.084 334.05 89.432-36.055 135.03-199.37-53.377-10.251 38.177-134.68-36.056zm244.26 423.83L38.08 372.482l36.056-135.03 199.01 53.377 10.251-38.176 135.03 36.055z" clip-rule="evenodd"></path>
</svg>
;
};

function RobloxIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={RobloxSvg} {...props} />
};

export default RobloxIcon;
