import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderGitOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ff7043)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #ffccbc)" d="m12.593 18.589 5.784-5.794 1.692 1.7a1.98 1.98 0 0 0 .93 2.233v5.544a1.99 1.99 0 0 0-1 1.731 2.002 2.002 0 0 0 4.003 0A1.99 1.99 0 0 0 23 22.272v-4.864l2.071 2.092a1.2 1.2 0 0 0-.07.5 2.002 2.002 0 1 0 2.002-2.002 1.2 1.2 0 0 0-.5.07l-2.573-2.571a1.98 1.98 0 0 0-1.15-2.342 2.1 2.1 0 0 0-1.281-.09l-1.702-1.692.791-.78a1.975 1.975 0 0 1 2.822 0l7.996 7.996a1.975 1.975 0 0 1 0 2.822l-7.996 7.996a1.975 1.975 0 0 1-2.822 0l-7.996-7.996a1.975 1.975 0 0 1 0-2.822Z"></path>
</svg>
;
};

function FolderGitOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderGitOpenSvg} {...props} />
};

export default FolderGitOpenIcon;
