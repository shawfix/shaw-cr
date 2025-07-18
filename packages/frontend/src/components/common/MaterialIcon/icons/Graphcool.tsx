import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function GraphcoolSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 300 300" width="1em" height="1em">
  <path fill="var(--material-icon-color, #4CAF50)" stroke="#4CAF50" stroke-width="7.884" d="M246.886 107.727c-12.237-6.892-27.616 2.1-30.081 3.646l-52.834 29.965c-7.8-6.196-18.914-5.933-26.412.625-7.499 6.558-9.24 17.537-4.14 26.094 5.102 8.556 15.588 12.246 24.923 8.768s14.852-13.129 13.111-22.937l52.688-29.9.321-.196c3.464-2.188 11.5-5.462 15.256-3.34 2.706 1.524 4.252 6.629 4.376 14.148h-.066v66.092a17.31 17.31 0 0 1-8.635 14.95l-75.739 43.755a17.31 17.31 0 0 1-17.261 0l-75.74-43.756a17.31 17.31 0 0 1-8.634-14.95V113.22c.01-6.165 3.3-11.86 8.634-14.95l68.549-39.562c6.522 7.482 17.451 9.25 26 4.206s12.283-15.468 8.886-24.794-12.962-14.904-22.751-13.27c-9.79 1.636-17.022 10.02-17.204 19.944L59.397 85.632a31.93 31.93 0 0 0-15.978 27.588v87.454a31.93 31.93 0 0 0 15.927 27.602l75.74 43.755a31.93 31.93 0 0 0 31.846 0l75.74-43.755a31.93 31.93 0 0 0 15.927-27.58V137.12h.05c.373-14.913-3.616-24.794-11.762-29.389z"></path>
</svg>
;
};

function GraphcoolIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={GraphcoolSvg} {...props} />
};

export default GraphcoolIcon;
