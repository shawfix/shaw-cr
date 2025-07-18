import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function RemarkSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ef5350)" d="M5.445 2.975C3.724 2.989 3.04 3.93 3 4V3H1v10h2V7c.647-.844 1.609-1.724 3-1V3a5 5 0 0 0-.555-.025M10.748 3q-1.319 0-2.352.623-1.025.616-1.588 1.766-.56 1.14-.56 2.593v.25q0 2.166 1.328 3.467Q8.913 13.001 11.033 13q1.204 0 2.193-.455.99-.464 1.569-1.283l-1.266-1.416q-.837 1.078-2.326 1.078-.963 0-1.596-.57C9.191 9.974 9.083 9.63 9 9h6V7.785q0-2.29-1.14-3.537Q12.726 3 10.747 3zm-.008 2.086q.82 0 1.266.473.444.463.463 1.318L12.48 7H9c.089-.642.177-1.054.492-1.398q.48-.517 1.248-.516"></path>
</svg>
;
};

function RemarkIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={RemarkSvg} {...props} />
};

export default RemarkIcon;
