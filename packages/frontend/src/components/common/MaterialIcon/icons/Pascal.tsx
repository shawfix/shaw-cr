import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function PascalSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #0288d1)" d="m8.863 14.765-1.158 6.597H3.937L7.191 2.637l6.559.013q3.035 0 4.77 1.685 1.737 1.685 1.518 4.398-.205 2.752-2.302 4.398-2.083 1.646-5.324 1.646zm.527-3.125 3.138.026q1.517 0 2.52-.785 1.003-.784 1.196-2.122t-.437-2.135q-.617-.797-1.839-.848l-3.55-.013z" aria-label="P"></path>
</svg>
;
};

function PascalIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={PascalSvg} {...props} />
};

export default PascalIcon;
