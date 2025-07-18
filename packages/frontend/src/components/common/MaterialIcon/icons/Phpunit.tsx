import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function PhpunitSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #5c6bc0)" d="M21.46 10.086c-.224.59-1.012.848-1.541.269-1.668-1.925-4.936-1.945-5.845.963-.694 2.092 1.035 4.28 4.093 4.003.671-.053 1.145.548.934 1.21l-1.521 4.157c-.386 1.023-1.376 1.574-2.547 1.191L3.384 17.631c-1.049-.37-1.624-1.513-1.28-2.54L6.419 3.298c.465-1.052 1.268-1.528 2.547-1.191l11.649 4.246c1.051.373 1.625 1.515 1.281 2.541zm-2.223 2.074c0-1.571-1.713-2.559-3.075-1.773s-1.363 2.76 0 3.546 3.075-.202 3.075-1.773"></path>
</svg>
;
};

function PhpunitIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={PhpunitSvg} {...props} />
};

export default PhpunitIcon;
