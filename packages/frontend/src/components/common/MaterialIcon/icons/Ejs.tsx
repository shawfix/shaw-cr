import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function EjsSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="var(--material-icon-color, none)" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ffca28)" d="M8.046 4.862.908 12l7.138 7.138 2.71-2.691L6.308 12l4.446-4.447z"></path>
  <path fill="var(--material-icon-color, #ffca28)" d="m20.616 4.152 1.47.69-7.783 15.005-1.47-.69z"></path>
  <ellipse cx="14.543" cy="7.812" stroke="#ffca28" stroke-width="1.455" rx="2.101" ry="2.798"></ellipse>
  <ellipse cx="20.35" cy="16.198" stroke="#ffca28" stroke-width="1.455" rx="2.101" ry="2.798"></ellipse>
</svg>
;
};

function EjsIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={EjsSvg} {...props} />
};

export default EjsIcon;
