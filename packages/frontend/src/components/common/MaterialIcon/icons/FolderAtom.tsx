import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderAtomSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path d="M13.84376,7.6l-1.28749-1.0729a2,2,0,0,0-1.28036-.46355H4a2,2,0,0,0-2,2v16a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2v-14a2,2,0,0,0-2-2H15.12412A2,2,0,0,1,13.84376,7.6Z" style="fill:#1e88e5"></path>
  <path d="M28.36,10.64a3,3,0,1,1-3,3,2.55188,2.55188,0,0,1,.14-.84A8.09642,8.09642,0,0,0,22,12a8,8,0,0,0-8,8l.04.84-1.99.21L12,20a9.9961,9.9961,0,0,1,14.67-8.84,3.01292,3.01292,0,0,1,1.69-.52m0,2a1,1,0,1,0,1,1,1,1,0,0,0-1-1M15.64,23.36a3.00882,3.00882,0,0,1,3,3,2.55188,2.55188,0,0,1-.14.84A8.09642,8.09642,0,0,0,22,28a8,8,0,0,0,8-8l-.04-.84,1.99-.21L32,20a9.9961,9.9961,0,0,1-14.67,8.84,3.00045,3.00045,0,1,1-1.69-5.48m0,2a1,1,0,1,0,1,1,.99654.99654,0,0,0-1-1M22,16a4,4,0,1,1-4,4A4,4,0,0,1,22,16Z" style="fill:#bbdefb"></path>
</svg>
;
};

function FolderAtomIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderAtomSvg} {...props} />
};

export default FolderAtomIcon;
