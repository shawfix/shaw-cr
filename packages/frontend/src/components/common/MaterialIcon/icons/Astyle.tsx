import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function AstyleSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ef5350)" d="M8.203 5.447 5.83 6.777l1.329-2.374-1.33-2.374 2.374 1.33 2.374-1.33-1.33 2.374 1.33 2.374zm11.394 9.305 2.374-1.329-1.33 2.374 1.33 2.373-2.374-1.329-2.374 1.33 1.33-2.374-1.33-2.374zm2.374-12.724-1.33 2.374 1.33 2.374-2.374-1.33-2.374 1.33 1.33-2.374-1.33-2.374 2.374 1.33zm-8.223 10.236 2.317-2.316-2.013-2.013-2.317 2.317zm.978-5.212 2.222 2.222c.37.35.37.968 0 1.338L5.867 21.694c-.37.37-.987.37-1.339 0l-2.222-2.221c-.37-.352-.37-.969 0-1.34l11.081-11.08c.37-.37.988-.37 1.34 0z"></path>
</svg>
;
};

function AstyleIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={AstyleSvg} {...props} />
};

export default AstyleIcon;
