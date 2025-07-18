import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function TerraformSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #5c6bc0)" d="m2 10 8 4V6L2 2zm10 5 8 4v-8l-8-4zm0 11 8 4v-8l-8-4zm10-14v8l8-4V8z"></path>
</svg>
;
};

function TerraformIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={TerraformSvg} {...props} />
};

export default TerraformIcon;
