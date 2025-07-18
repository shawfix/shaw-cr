import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderSublimeOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #616161)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #ffa726)" d="M32 15.833v-2.946a.5.5 0 0 0-.658-.474l-11 3.666a.5.5 0 0 0-.342.475v3.279a.5.5 0 0 0 .342.474L26 22.193l-5.658 1.886a.5.5 0 0 0-.342.475V27.5a.5.5 0 0 0 .658.474l11-3.667a.5.5 0 0 0 .342-.474v-3.28a.5.5 0 0 0-.342-.474L26 18.193l5.658-1.886a.5.5 0 0 0 .342-.474" data-mit-no-recolor></path>
</svg>
;
};

function FolderSublimeOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderSublimeOpenSvg} {...props} />
};

export default FolderSublimeOpenIcon;
