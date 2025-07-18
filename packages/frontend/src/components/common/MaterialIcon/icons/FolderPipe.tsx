import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderPipeSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #00897b)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #b2dfdb)" d="M30 22v2h-6v-2h2v-2h-2v-4a2 2 0 0 0-2-2h-6v-2h-2v8h2v-2h4v2h-2v2h2v4a2 2 0 0 0 2 2h8v2h2v-8Z"></path>
</svg>
;
};

function FolderPipeIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderPipeSvg} {...props} />
};

export default FolderPipeIcon;
