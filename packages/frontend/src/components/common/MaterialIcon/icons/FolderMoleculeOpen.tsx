import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderMoleculeOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path d="M28.96692,12H9.44152a2,2,0,0,0-1.89737,1.36754L4,24V10H28a2,2,0,0,0-2-2H15.1241a2,2,0,0,1-1.28038-.46357L12.5563,6.46357A2,2,0,0,0,11.27592,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H26l4.80523-11.21213A2,2,0,0,0,28.96692,12Z" style="fill:#ff9800"></path>
  <path d="M18,23a1,1,0,1,1-1-1A1,1,0,0,1,18,23Zm14,0a5.00013,5.00013,0,1,1-8.85956-3.14276,4.62659,4.62659,0,0,1-2.28088,0,5.049,5.049,0,1,1-2.71912-1.71448,5.00013,5.00013,0,1,1,7.71912,0A4.95863,4.95863,0,0,1,32,23ZM20,23a3,3,0,1,0-3,3A3,3,0,0,0,20,23Zm2-5a3,3,0,1,0-3-3A3,3,0,0,0,22,18Zm8,5a3,3,0,1,0-3,3A3,3,0,0,0,30,23Zm-3-1a1,1,0,1,0,1,1A1,1,0,0,0,27,22Zm-5-8a1,1,0,1,0,1,1A1,1,0,0,0,22,14Z" style="fill:#ffe0b2"></path>
</svg>
;
};

function FolderMoleculeOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderMoleculeOpenSvg} {...props} />
};

export default FolderMoleculeOpenIcon;
