import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function RbxmkSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="var(--material-icon-color, none)" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #00C853)" fill-rule="evenodd" d="m6.331 2 16.164 4.331-2.454 9.158-2.25-.603.94-3.508-.002-.001-1.35-.362-2.129-.57-1.354-.363-.364 1.356-.577 2.153-2.125-.57.94-3.509-1.354-.362-2.128-.57-1.35-.363-.94 3.507-2.118-.568-.364 1.357 2.118.568 1.35.362h.001l.94-3.509 2.128.57-.577 2.155-.363 1.354 1.354.363 2.125.57 1.355.363.94-3.507 2.13.57-.578 2.152-.363 1.355 1.353.362 2.249.603-1.514 5.65L2 18.165z" clip-rule="evenodd"></path>
</svg>
;
};

function RbxmkIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={RbxmkSvg} {...props} />
};

export default RbxmkIcon;
