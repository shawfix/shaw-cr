import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderSublimeSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #616161)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #ffa726)" d="M32 15.833v-2.946a.5.5 0 0 0-.658-.474l-11 3.666a.5.5 0 0 0-.342.475v3.279a.5.5 0 0 0 .342.474L26 22.193l-5.658 1.886a.5.5 0 0 0-.342.475V27.5a.5.5 0 0 0 .658.474l11-3.667a.5.5 0 0 0 .342-.474v-3.28a.5.5 0 0 0-.342-.474L26 18.193l5.658-1.886a.5.5 0 0 0 .342-.474" data-mit-no-recolor></path>
</svg>
;
};

function FolderSublimeIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderSublimeSvg} {...props} />
};

export default FolderSublimeIcon;
