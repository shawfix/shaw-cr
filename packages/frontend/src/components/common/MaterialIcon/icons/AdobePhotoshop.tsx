import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function AdobePhotoshopSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <rect width="28" height="28" x="2" y="2" fill="#37474f" rx="4"></rect>
  <path fill="var(--material-icon-color, #64b5f6)" d="M23.744 14.716a3.7 3.7 0 0 0-1.066-.408 5.4 5.4 0 0 0-1.245-.157 2.1 2.1 0 0 0-.666.085.57.57 0 0 0-.345.24.7.7 0 0 0-.089.324.56.56 0 0 0 .111.313 1.3 1.3 0 0 0 .378.324q.386.217.79.397a7.8 7.8 0 0 1 1.71.877 2.7 2.7 0 0 1 .878.998 2.8 2.8 0 0 1 .256 1.238 2.96 2.96 0 0 1-.434 1.599 2.83 2.83 0 0 1-1.244 1.07 4.75 4.75 0 0 1-2.011.384 7 7 0 0 1-1.511-.156 4.2 4.2 0 0 1-1.134-.385.24.24 0 0 1-.122-.228v-2.092a.14.14 0 0 1 .044-.108c.034-.024.067-.012.1.012a4.6 4.6 0 0 0 1.378.59 4.8 4.8 0 0 0 1.311.18 2 2 0 0 0 .923-.169.56.56 0 0 0 .3-.505.65.65 0 0 0-.267-.48 4.6 4.6 0 0 0-1.089-.565 6.6 6.6 0 0 1-1.578-.866 3 3 0 0 1-.844-1.021 2.76 2.76 0 0 1-.256-1.226 3 3 0 0 1 .378-1.455 2.8 2.8 0 0 1 1.167-1.105A4 4 0 0 1 21.533 12a9 9 0 0 1 1.378.108 3.7 3.7 0 0 1 .956.277.2.2 0 0 1 .11.108.7.7 0 0 1 .023.144v1.96a.15.15 0 0 1-.056.12.28.28 0 0 1-.2 0M12.38 10H9.99v-.03h-2v12h2V18h2.39A3.62 3.62 0 0 0 16 14.38v-.76A3.62 3.62 0 0 0 12.38 10M14 14.38A1.626 1.626 0 0 1 12.38 16H9.99v-4h2.39A1.626 1.626 0 0 1 14 13.62Z"></path>
</svg>
;
};

function AdobePhotoshopIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={AdobePhotoshopSvg} {...props} />
};

export default AdobePhotoshopIcon;
