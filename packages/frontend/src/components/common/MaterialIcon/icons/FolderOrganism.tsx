import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderOrganismSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path d="M13.84376,7.6l-1.28749-1.0729a2,2,0,0,0-1.28036-.46355H4a2,2,0,0,0-2,2v16a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2v-14a2,2,0,0,0-2-2H15.12412A2,2,0,0,1,13.84376,7.6Z" style="fill:#009688"></path>
  <circle cx="28" cy="24" r="4" style="fill:#b2dfdb"></circle>
  <circle cx="20" cy="24" r="4" style="fill:#b2dfdb"></circle>
  <circle cx="28" cy="16" r="4" style="fill:#b2dfdb"></circle>
  <circle cx="20" cy="16" r="4" style="fill:#b2dfdb"></circle>
</svg>
;
};

function FolderOrganismIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderOrganismSvg} {...props} />
};

export default FolderOrganismIcon;
