import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function QsharpSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #fbc02d)" d="M11.938 16.414c.9-1.101 1.468-2.936 1.468-4.735 0-1.963-.697-3.854-1.872-5.12-1.156-1.248-2.66-1.853-4.57-1.853s-3.413.605-4.569 1.853C1.22 7.825.523 9.716.523 11.716s.697 3.89 1.872 5.157c1.156 1.248 2.68 1.853 4.57 1.853 1.376 0 2.404-.275 3.468-.917l1.578 1.486 1.395-1.486zm-3.395-3.212-1.396 1.487 1.413 1.34c-.422.22-1.027.348-1.615.348-2.202 0-3.67-1.853-3.67-4.66 0-2.809 1.468-4.662 3.689-4.662 2.239 0 3.689 1.835 3.689 4.68 0 1.1-.202 2.092-.606 2.9z" aria-label="Q"></path>
  <path fill="var(--material-icon-color, #fbc02d)" d="m17.589 4.728-.611 4h-1.5l-.34 2h1.5l-.32 2h-1.5l-.34 2h1.5l-.61 4h2l.61-4h1l-.61 4h2l.61-4h1.5l.34-2h-1.5l.32-2h1.5l.34-2h-1.5l.611-4h-2l-.611 4h-1l.611-4zm1.049 6h1l-.32 2h-1z"></path>
</svg>
;
};

function QsharpIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={QsharpSvg} {...props} />
};

export default QsharpIcon;
