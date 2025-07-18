import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function TailwindcssSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #4db6ac)" d="M23.5 12H8c.89-2.3 4.02-4 7.75-4s6.86 1.7 7.75 4M14 12h15.5c-.89 2.3-4.02 4-7.75 4s-6.86-1.7-7.75-4m3.5 8H2c.89-2.3 4.02-4 7.75-4s6.86 1.7 7.75 4M8 20h15.5c-.89 2.3-4.02 4-7.75 4S8.89 22.3 8 20"></path>
</svg>
;
};

function TailwindcssIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={TailwindcssSvg} {...props} />
};

export default TailwindcssIcon;
