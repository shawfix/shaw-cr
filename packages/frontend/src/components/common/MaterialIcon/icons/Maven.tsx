import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function MavenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" width="1em" height="1em">
  <defs>
    <linearGradient id="a" x1=".125" x2="0" y1="1" y2="0">
      <stop offset="0%" stop-color="#ab47bc"></stop>
      <stop offset="37.5%" stop-color="#ab47bc"></stop>
      <stop offset="37.501%" stop-color="#d32f2f"></stop>
      <stop offset="54.25%" stop-color="#d32f2f"></stop>
      <stop offset="54.251%" stop-color="#ff7043"></stop>
      <stop offset="69.75%" stop-color="#ff7043"></stop>
      <stop offset="69.751%" stop-color="#ffa726"></stop>
      <stop offset="100%" stop-color="#ffa726"></stop>
    </linearGradient>
  </defs>
  <path fill="var(--material-icon-color, url(#a))" d="M22 2s-7.64-.37-13.66 7.88C3.72 16.21 2 22 2 22l1.94-1c1.44-2.5 2.19-3.53 3.6-5 2.53.74 5.17.65 7.46-2-2-.56-3.6-.43-5.96-.19C11.69 12 13.5 11.6 16 12l1-2c-1.8-.34-3-.37-4.78.04C14.19 8.65 15.56 7.87 18 8l1.11-1.73c-1.53-.06-2.4-.02-4.19.3 1.61-1.46 3.08-2.12 5.22-2.25 0 0 1.05-1.89 1.86-2.32"></path>
</svg>
;
};

function MavenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={MavenSvg} {...props} />
};

export default MavenIcon;
