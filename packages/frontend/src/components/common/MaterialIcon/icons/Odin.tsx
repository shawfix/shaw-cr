import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function OdinSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 260 260" width="1em" height="1em">
  <path fill="var(--material-icon-color, #448aff)" d="M73.123 212.264a99 99 0 0 1-6.865-5.18l98.605-170.789s4.059 1.506 7.412 3.113c4.226 2.026 7.726 4 7.726 4 47.796 27.596 64.198 88.805 36.602 136.6-27.595 47.798-88.804 64.198-136.6 36.603 0 0-3.347-1.924-6.879-4.346zm98.545-154.422L88.336 202.177c39.831 22.997 90.838 9.329 113.834-30.5 22.995-39.832 9.33-90.838-30.5-113.835zM47.944 187.19c-3.35-4.852-4.543-7.18-4.543-7.18-17.227-29.922-18.49-67.972 0-100s52.075-49.958 86.603-50c0 0 4.661-.011 8.543.36 5.847.56 9.735 1.315 9.735 1.315L53.986 195.011s-2.237-2.316-6.04-7.82zm72.084-139.903c-25.13 3.054-48.573 17.467-62.193 41.058-13.62 23.589-14.378 51.098-4.459 74.39z"></path>
</svg>
;
};

function OdinIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={OdinSvg} {...props} />
};

export default OdinIcon;
