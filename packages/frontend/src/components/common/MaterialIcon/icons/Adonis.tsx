import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function AdonisSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="1em" height="1em">
  <path fill="var(--material-icon-color, #7c4dff)" d="m79.579 25.741-66.481 115.15h63.305l11.218-19.433H47.613L79.804 65.7l20.005 34.649 11.423-19.783zm42.118 50.221-45.203 78.297h90.408z" paint-order="fill markers stroke"></path>
</svg>
;
};

function AdonisIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={AdonisSvg} {...props} />
};

export default AdonisIcon;
