import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function IstanbulSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #fdd835)" d="M30 13v-3h-2v3h-1v.5a.5.5 0 0 0 .5.5h.5v10h-1v-2h-1v-8h-1v6h-2v-3h-1v1h-1v-1h1a6.35 6.35 0 0 0-6-4 6.35 6.35 0 0 0-6 4h1v1h-1v-1H9v3H7v-6H6v8H5v2H4V14h.5a.5.5 0 0 0 .5-.5V13H4v-3H2v3H1v.5a.5.5 0 0 0 .5.5H2v12h8v-6h2v6h8v-6h2v6h8V14h.5a.5.5 0 0 0 .5-.5V13ZM14 24h-1v-2h1Zm3 0h-2v-2a1 1 0 0 1 2 0Zm2 0h-1v-2h1Zm-1-7v1h-1v-1Zm-3 0v1h-1v-1Zm-3 0h1v1h-1Zm7 1v-1h1v1ZM3 6 2 9h2zm26 0-1 3h2z"></path>
  <path fill="var(--material-icon-color, #fdd835)" d="m16 10-1 2h2zm9.5 1-.5 2h1zm-19 0L6 13h1z"></path>
</svg>
;
};

function IstanbulIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={IstanbulSvg} {...props} />
};

export default IstanbulIcon;
