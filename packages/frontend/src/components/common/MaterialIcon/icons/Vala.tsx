import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ValaSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" width="1em" height="1em">
  <defs>
    <linearGradient id="c" x1="25.058" x2="25.058" y1="47.028" y2="39.999" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#212121" stop-opacity="0"></stop>
      <stop offset=".5" stop-color="#212121"></stop>
      <stop offset="1" stop-color="#212121" stop-opacity="0"></stop>
    </linearGradient>
    <linearGradient id="e" x1="24" x2="24" y1="5" y2="43" gradientTransform="matrix(1.4324 0 0 1.4363 134.03 -5.86)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#FAFAFA"></stop>
      <stop offset=".063" stop-color="#FAFAFA" stop-opacity=".235"></stop>
      <stop offset=".951" stop-color="#FAFAFA" stop-opacity=".157"></stop>
      <stop offset="1" stop-color="#FAFAFA" stop-opacity=".392"></stop>
    </linearGradient>
    <linearGradient id="d" x1="31.293" x2="31.293" y1="5.008" y2="59.329" gradientTransform="translate(136.41 -3.39)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#BA68C8"></stop>
      <stop offset="1" stop-color="#673AB7"></stop>
    </linearGradient>
    <radialGradient id="a" cx="4.993" cy="43.5" r="2.5" gradientTransform="matrix(2.0038 0 0 1.4 27.988 -17.4)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#212121"></stop>
      <stop offset="1" stop-color="#212121" stop-opacity="0"></stop>
    </radialGradient>
    <radialGradient id="b" cx="4.993" cy="43.5" r="2.5" gradientTransform="matrix(2.0038 0 0 1.4 -20.012 -104.4)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#212121"></stop>
      <stop offset="1" stop-color="#212121" stop-opacity="0"></stop>
    </radialGradient>
  </defs>
  <g opacity=".6">
    <path fill="url(#a)" d="M38 40h5v7h-5z" transform="matrix(1.579 0 0 .71429 130.515 24.54)"></path>
    <path fill="url(#b)" d="M-10-47h5v7h-5z" transform="matrix(-1.579 0 0 -.71429 130.515 24.54)"></path>
    <path fill="url(#c)" d="M10 40h28v7H10z" transform="matrix(1.579 0 0 .71429 130.515 24.54)"></path>
  </g>
  <rect width="55" height="55" x="140.91" y="1.11" fill="url(#d)" rx="3" ry="3"></rect>
  <rect width="53" height="53.142" x="141.91" y="2.039" stroke="url(#e)" stroke-linecap="round" stroke-linejoin="round" opacity=".3" rx="2" ry="2"></rect>
  <rect width="55" height="55" x="140.91" y="1.11" stroke="#4A148C" stroke-linecap="round" stroke-linejoin="round" opacity=".5" rx="3" ry="3"></rect>
  <path fill="var(--material-icon-color, #9575cd)" d="m26.357 57.882-1.111-47.15q-4.854 1.82-7.583 5.694-2.698 3.877-2.698 9.64 0 1.314.136 2.157.167.809.336 1.314.169.472.305.742.167.27.167.472-1.786 0-3.167-.336-1.383-.372-2.327-1.147-.91-.773-1.415-2.055-.473-1.28-.473-3.167 0-2.292.976-4.516 1.011-2.223 2.73-4.213 1.753-1.987 4.08-3.673 2.36-1.685 5.021-2.899 2.695-1.247 5.594-1.92 2.932-.71 5.831-.71.775 0 1.416.034.673.033 1.346.1l.608 42.465L50.654 6.45h4.819L36.298 57.883h-9.943z"></path>
</svg>
;
};

function ValaIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ValaSvg} {...props} />
};

export default ValaIcon;
