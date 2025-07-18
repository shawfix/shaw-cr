import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderServerSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #fbc02d)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #fffde7)" d="M14 15v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H15a1 1 0 0 0-1 1m6 3h-4v-2h4Zm4 0h-2v-2h2Zm-10 5v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H15a1 1 0 0 0-1 1m6 3h-4v-2h4Zm4 0h-2v-2h2Z"></path>
</svg>
;
};

function FolderServerIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderServerSvg} {...props} />
};

export default FolderServerIcon;
