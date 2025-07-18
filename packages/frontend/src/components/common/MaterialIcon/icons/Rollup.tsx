import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function RollupSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="100 100 800 800" width="1em" height="1em">
  <path fill="var(--material-icon-color, #f44336)" d="M733.79 394.71c0 77.407-42.308 144.79-104.67 180.51-3.76 3.134-5.954 8.148-3.76 12.849l106.87 211.22c2.82 6.581-1.568 14.103-8.776 14.103h-408.35l2.194-1.254c15.356-8.774 121.91-219.06 225.95-318.72 104.05-99.658 117.21-66.439 59.857-174.87 0 0 44.188 86.182 6.581 92.763-29.459 5.328-97.15-60.17-72.08-119.09 25.071-57.664 123.79-46.695 169.23.314 17.236 30.085 26.952 64.872 26.952 102.17m-385.47 140.71c-41.367 76.154-67.692 131.62-82.108 170.48v-509.57c0-5.328 4.388-9.715 9.715-9.715h252.91c73.333 1.253 137.58 40.114 173.62 98.718-26.325-32.906-67.692-51.71-108.43-51.71-77.407 0-96.837 28.206-245.7 301.79z"></path>
</svg>
;
};

function RollupIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={RollupSvg} {...props} />
};

export default RollupIcon;
