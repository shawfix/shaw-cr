import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function EmberSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #FF5722)" d="M12.78 4c1.79-.03 3.18.35 4.12 1.99 2.36 5.88-6.08 8.92-6.42 9.04h-.01s-.25 1.6 2.17 1.54c2.98 0 6.1-2.31 7.3-3.3.29-.23.71-.21.97.06l.89.93c.25.27.26.69.02.97-.77.87-2.59 2.65-5.33 3.79 0 0-4.57 2.13-7.65.12-1.83-1.2-2.34-2.64-2.55-4.13 0 0-2.23-.12-3.66-.67-1.44-.57.01-2.26.01-2.26s.44-.71 1.28 0c.83.71 2.4.39 2.4.39.14-1.11.37-2.57 1.06-4.11C8.81 5.14 11 4.04 12.78 4m1.05 3.24c-.94-.91-3.67.91-3.78 5.09 0 0 .81.24 2.58-.98 1.79-1.23 2.13-3.19 1.19-4.11z"></path>
</svg>
;
};

function EmberIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={EmberSvg} {...props} />
};

export default EmberIcon;
