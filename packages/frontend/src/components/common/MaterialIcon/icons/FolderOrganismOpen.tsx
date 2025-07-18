import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderOrganismOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path d="M28.96692,12H9.44152a2,2,0,0,0-1.89737,1.36754L4,24V10H28a2,2,0,0,0-2-2H15.1241a2,2,0,0,1-1.28038-.46357L12.5563,6.46357A2,2,0,0,0,11.27592,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H26l4.80523-11.21213A2,2,0,0,0,28.96692,12Z" style="fill:#009688"></path>
  <circle cx="28" cy="24" r="4" style="fill:#b2dfdb"></circle>
  <circle cx="20" cy="24" r="4" style="fill:#b2dfdb"></circle>
  <circle cx="28" cy="16" r="4" style="fill:#b2dfdb"></circle>
  <circle cx="20" cy="16" r="4" style="fill:#b2dfdb"></circle>
</svg>
;
};

function FolderOrganismOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderOrganismOpenSvg} {...props} />
};

export default FolderOrganismOpenIcon;
