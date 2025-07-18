import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function PmtwoEcosystemSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" width="1em" height="1em">
  <defs>
    <linearGradient id="a" x1="30.625" x2="18.735" y1="16" y2="16" gradientTransform="matrix(1 0 0 -1 0 32)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#536dfe"></stop>
      <stop offset="1" stop-color="#42a5f5"></stop>
    </linearGradient>
    <linearGradient id="b" x1="14.849" x2="12.074" y1="17.238" y2="22.863" gradientTransform="matrix(1 0 0 -1 0 32)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#6200ea"></stop>
      <stop offset="1" stop-color="#a0f"></stop>
    </linearGradient>
    <linearGradient id="c" x1="14.412" x2="10.362" y1="14.78" y2="4.655" gradientTransform="matrix(1 0 0 -1 0 32)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#9c27b0"></stop>
      <stop offset="1" stop-color="#ec407a"></stop>
    </linearGradient>
  </defs>
  <path fill="var(--material-icon-color, url(#a))" d="M21.23 18.477a4.26 4.26 0 0 0 0-4.954L18 9l1.88-1.88 4.447 6.662a3.98 3.98 0 0 1 0 4.436L19.88 24.88 18 23Zm7.93-5.25L23 4l-1.678 1.678 4.67 6.993a5.98 5.98 0 0 1 0 6.658l-4.67 6.993L23 28l6.16-9.226a4.995 4.995 0 0 0 0-5.548"></path>
  <path fill="var(--material-icon-color, url(#b))" d="m3.2 12 2.4-4H10a4 4 0 0 0 4-4h4.43l-2.642 4.527A7.02 7.02 0 0 1 9.742 12Zm17.545-8-3.23 5.535A9.03 9.03 0 0 1 9.743 14H2v2h14l7-12Z"></path>
  <path fill="var(--material-icon-color, url(#c))" d="M18.43 28H14a4 4 0 0 0-4-4H5.6l-2.4-4h6.542a7.02 7.02 0 0 1 6.047 3.473Zm-.913-5.535L20.745 28H23l-7-12H2v2h7.742a9.03 9.03 0 0 1 7.775 4.465"></path>
</svg>
;
};

function PmtwoEcosystemIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={PmtwoEcosystemSvg} {...props} />
};

export default PmtwoEcosystemIcon;
