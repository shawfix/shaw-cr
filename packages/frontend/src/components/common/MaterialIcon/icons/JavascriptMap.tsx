import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function JavascriptMapSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <g fill="#ffca28">
    <path d="M12 5v1h1v7H6v-1H5l-.069 2 9.069.001V5z"></path>
    <path d="M2 2v9h9V2zm3 3h1v4a1.003 1.003 0 0 1-1 1H4a1.003 1.003 0 0 1-1-1V8h1v1h1zm3 0h2v1H8v1h1a1.003 1.003 0 0 1 1 1v1a1.003 1.003 0 0 1-1 1H7V9h2V8H8a1.003 1.003 0 0 1-1-1V6a1.003 1.003 0 0 1 1-1"></path>
  </g>
</svg>
;
};

function JavascriptMapIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={JavascriptMapSvg} {...props} />
};

export default JavascriptMapIcon;
