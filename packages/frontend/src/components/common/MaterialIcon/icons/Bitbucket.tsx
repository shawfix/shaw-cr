import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function BitbucketSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" width="1em" height="1em">
  <defs>
    <linearGradient id="a" x1="64.01" x2="32.99" y1="65.26" y2="89.48" gradientUnits="userSpaceOnUse">
      <stop offset=".18" stop-color="#1565c0"></stop>
      <stop offset="1" stop-color="#1e88e5"></stop>
    </linearGradient>
  </defs>
  <path fill="var(--material-icon-color, #1e88e5)" d="M2.985 3.333a.618.618 0 0 0-.617.716l2.621 15.914a.84.84 0 0 0 .822.701h12.576a.62.62 0 0 0 .618-.519l2.627-16.09a.618.618 0 0 0-.617-.716zm11.039 11.501H10.01L8.923 9.16h6.074z"></path>
  <path fill="var(--material-icon-color, url(#a))" d="M59.67 60.12H40.9L37.75 78.5h-13L9.4 96.73a2.7 2.7 0 0 0 1.75.66h40.74a2 2 0 0 0 2-1.68z" transform="translate(2.368 -9.404)scale(.30877)"></path>
</svg>
;
};

function BitbucketIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={BitbucketSvg} {...props} />
};

export default BitbucketIcon;
