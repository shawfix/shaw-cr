import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function TuneSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #fbc02d)" d="M12 10h10v2H12z"></path>
  <path fill="var(--material-icon-color, #fbc02d)" d="M16 4h2v8h-2zm4 18h10v2H20zm4 2h2v4h-2zm0-20h2v14h-2zM2 18h10v2H2z"></path>
  <path fill="var(--material-icon-color, #fbc02d)" d="M6 18h2v10H6zM6 4h2v10H6zm10 12h2v12h-2z"></path>
</svg>
;
};

function TuneIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={TuneSvg} {...props} />
};

export default TuneIcon;
