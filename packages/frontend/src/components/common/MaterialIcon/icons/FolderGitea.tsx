import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderGiteaSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #689f38)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #dcedc8)" d="M24 14v4h1.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5H22v-4H12a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3.202l.3 2A4.55 4.55 0 0 0 20 28h6a4.55 4.55 0 0 0 4.497-4L32 14Zm-12 6v-4h2.3l.602 4Z"></path>
</svg>
;
};

function FolderGiteaIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderGiteaSvg} {...props} />
};

export default FolderGiteaIcon;
