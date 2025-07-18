import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderCommandSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #03a9f4)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #b3e5fc)" d="M28 28a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2H12a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2H8v2h24v-2Zm0-2h-8v-2h8Zm-16-8.264 1.014-1.724L20.037 20v2l-7.023 4L12 24.275l5.558-3.27Z"></path>
</svg>
;
};

function FolderCommandIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderCommandSvg} {...props} />
};

export default FolderCommandIcon;
