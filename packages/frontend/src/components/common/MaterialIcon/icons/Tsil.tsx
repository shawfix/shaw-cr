import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function TsilSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #795548)" d="M14 13.3a.7.7 0 0 1-.7.7H8V8h6z"></path>
  <path fill="var(--material-icon-color, #ffe57f)" d="M14 8H8V2h5.3a.7.7 0 0 1 .7.7z"></path>
  <path fill="var(--material-icon-color, #ffab40)" d="M8 8H2V2.7a.7.7 0 0 1 .7-.7H8z"></path>
  <path fill="var(--material-icon-color, #212121)" d="M8 14H2.7a.7.7 0 0 1-.7-.7V8h6z"></path>
</svg>
;
};

function TsilIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={TsilSvg} {...props} />
};

export default TsilIcon;
