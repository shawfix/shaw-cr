import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function MatlabSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 720" width="1em" height="1em">
  <path fill="var(--material-icon-color, #4db6ac)" d="M209.25 329.98 52.37 387.636l121.32 85.822 96.752-95.805-61.197-47.674z"></path>
  <path fill="var(--material-icon-color, #00897b)" d="M480.19 71.446c-13.123 1.784-9.565 1.013-28.4 16.091-18.009 14.417-69.925 100.35-97.674 129.26-24.688 25.721-34.46 12.199-60.102 33.661-25.68 21.494-65.273 64.464-65.273 64.464l63.978 47.319 101.43-139.48c23.948-32.932 23.693-37.266 36.743-71.821 6.385-16.906 17.76-29.899 27.756-45.808 12.488-19.874 30.186-34.855 21.543-33.68z"></path>
  <path fill="var(--material-icon-color, #ffb74d)" d="M478.21 69.796c-31.267-.188-62.068 137.25-115.56 242.69-54.543 107.52-162.24 176.82-162.24 176.82 18.157 8.243 34.682 4.91 54.236 23.395 13.375 16.164 52.091 95.975 75.174 146.12 0 0 18.965-10.297 42.994-27.694 24.03-17.398 53.124-41.897 73.384-70.301 26.884-37.692 47.897-61.042 65.703-75.271s32.404-19.336 46.459-20.54c50.237-4.305 124.58 85.792 124.58 85.792S527.27 70.097 478.2 69.797z"></path>
</svg>
;
};

function MatlabIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={MatlabSvg} {...props} />
};

export default MatlabIcon;
