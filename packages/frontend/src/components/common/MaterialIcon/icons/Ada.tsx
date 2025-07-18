import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function AdaSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #0277bd)" d="m2 12 2.9-1.07c.25-1.1.87-1.73.87-1.73a3.996 3.996 0 0 1 5.65 0l1.41 1.41 6.31-6.7c.95 3.81 0 7.62-2.33 10.69L22 19.62s-8.47 1.9-13.4-1.95c-2.63-2.06-3.22-3.26-3.59-4.52zm5.04.21c.37.37.98.37 1.35 0s.37-.97 0-1.34a.96.96 0 0 0-1.35 0c-.37.37-.37.97 0 1.34"></path>
</svg>
;
};

function AdaIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={AdaSvg} {...props} />
};

export default AdaIcon;
