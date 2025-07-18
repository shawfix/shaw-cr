import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function CracoSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #00bfa5)" d="M16 8a8 8 0 1 1-8 8 8.01 8.01 0 0 1 8-8m0-4a12 12 0 1 0 12 12A12 12 0 0 0 16 4"></path>
  <path fill="var(--material-icon-color, #00bfa5)" d="m11.315 19.758-.755-.754 1.5-1.502L13.557 16l-1.499-1.502-1.499-1.502.754-.755.755-.754 2.304 2.226c1.267 1.225 2.303 2.254 2.303 2.287s-1.036 1.062-2.303 2.286l-2.304 2.227Zm5.323 0-.754-.754 1.499-1.502L18.882 16l-1.5-1.502-1.498-1.502.754-.755.755-.754 2.303 2.226C20.963 14.938 22 15.967 22 16s-1.037 1.062-2.304 2.286l-2.303 2.227ZM14 26h4v4h-4zm16-12v4h-4v-4zm-2.686 10.486-2.828 2.828-2.9-2.9 2.829-2.828zm-16.9-16.901-2.829 2.829-2.9-2.9 2.829-2.828zM7.586 21.586l2.828 2.828-2.9 2.9-2.828-2.829zm16.899-16.9 2.829 2.829-2.9 2.9-2.828-2.829zM6 14v4H2v-4zm8-12h4v4h-4z"></path>
</svg>
;
};

function CracoIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={CracoSvg} {...props} />
};

export default CracoIcon;
