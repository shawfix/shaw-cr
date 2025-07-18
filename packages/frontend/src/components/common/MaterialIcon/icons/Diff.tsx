import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function DiffSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="var(--material-icon-color, none)" viewBox="0 0 24 24" width="1em" height="1em">
  <path d="M0 0h24v24H0z"></path>
  <path fill="var(--material-icon-color, #42a5f5)" d="M18 23H4c-1.1 0-2-.9-2-2V7h2v14h14zM14.5 7V5h-2v2h-2v2h2v2h2V9h2V7zm2 6h-6v2h6zM15 1H8c-1.1 0-1.99.9-1.99 2L6 17c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V7zm4 16H8V3h6.17L19 7.83z"></path>
</svg>
;
};

function DiffIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={DiffSvg} {...props} />
};

export default DiffIcon;
