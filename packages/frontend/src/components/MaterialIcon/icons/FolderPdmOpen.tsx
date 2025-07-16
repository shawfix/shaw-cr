import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderPdmOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #9575cd)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #d1c4e9)" d="m23.51 10.276-7 3.937a1 1 0 0 0-.51.872v7.83a1 1 0 0 0 .51.872l7 3.937a1 1 0 0 0 .98 0l7-3.937a1 1 0 0 0 .51-.872v-7.83a1 1 0 0 0-.51-.872l-7-3.937a1 1 0 0 0-.98 0m-5.255 5.25 5.5-3.098a.5.5 0 0 1 .49 0L26 13.42V14l-8 4v-2.038a.5.5 0 0 1 .255-.435ZM26 16v5.52l-5.24-2.9Zm-2.246 9.572-5.5-3.099a.5.5 0 0 1-.254-.435V20l.59-.29 8.1 4.48-2.444 1.381a.5.5 0 0 1-.492 0ZM30 22.038a.5.5 0 0 1-.255.435l-1.005.567-.74-.41v-8.09l1.746.986a.5.5 0 0 1 .254.436Z"></path>
</svg>
;
};

function FolderPdmOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderPdmOpenSvg} {...props} />
};

export default FolderPdmOpenIcon;
