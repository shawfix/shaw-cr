import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function GraphqlSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ec407a)" d="M6 20h20v2H6z"></path>
  <path fill="var(--material-icon-color, #ec407a)" d="M6 10h20v2H6z"></path>
  <path fill="var(--material-icon-color, #ec407a)" d="M6 12h2v10H6zm18-2h2v12h-2z"></path>
  <path fill="var(--material-icon-color, #ec407a)" d="m5.014 19.41 11.674 6.866L15.674 28 4 21.134z"></path>
  <path fill="var(--material-icon-color, #ec407a)" d="M26.688 21.724 15.014 28.59 14 26.866 25.674 20zM5.124 10.382l11.415-7.29 1.077 1.686L6.2 12.068z"></path>
  <path fill="var(--material-icon-color, #ec407a)" d="m25.798 12.067-11.415-7.29 1.077-1.685 11.415 7.29zM6.2 19.932l11.416 7.29-1.077 1.686-11.415-7.29z"></path>
  <path fill="var(--material-icon-color, #ec407a)" d="m26.875 21.619-11.415 7.29-1.077-1.687 11.415-7.289zM5.877 22.6 16.04 3.686l1.762.946L7.638 23.546z"></path>
  <path fill="var(--material-icon-color, #ec407a)" d="M24.361 23.545 14.197 4.633l1.761-.947 10.165 18.913z"></path>
  <circle cx="7" cy="21" r="3" fill="#ec407a"></circle>
  <circle cx="16" cy="27" r="3" fill="#ec407a"></circle>
  <circle cx="25" cy="21" r="3" fill="#ec407a"></circle>
  <circle cx="7" cy="11" r="3" fill="#ec407a"></circle>
  <circle cx="16" cy="5" r="3" fill="#ec407a"></circle>
  <circle cx="25" cy="11" r="3" fill="#ec407a"></circle>
</svg>
;
};

function GraphqlIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={GraphqlSvg} {...props} />
};

export default GraphqlIcon;
