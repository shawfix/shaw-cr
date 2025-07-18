import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderMercurialSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #78909c)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #cfd8dc)" d="M31.983 20.728c.31-5.49-3.708-11.404-9.888-10.665a6.1 6.1 0 0 0-5.15 3.379c-1.237 2.64.102 6.125 4.12 7.286 2.472.74 2.987 1.795 2.678 3.062-.31 1.162-1.133 2.43-1.34 3.485a3 3 0 0 0-.102.95c.103 2.324 4.738 3.274 8.343-2.956a9.35 9.35 0 0 0 1.34-4.54Z"></path>
  <circle cx="16" cy="26" r="4" fill="#cfd8dc"></circle>
  <circle cx="12" cy="18" r="2" fill="#cfd8dc"></circle>
</svg>
;
};

function FolderMercurialIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderMercurialSvg} {...props} />
};

export default FolderMercurialIcon;
