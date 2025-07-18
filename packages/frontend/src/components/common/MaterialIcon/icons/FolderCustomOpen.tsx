import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderCustomOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ff7043)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #ffccbc)" d="M26.017 24 22 28h10v-4zm-2.724-9.293L14 24v4h4l9.293-9.293a1 1 0 0 0 0-1.414l-2.586-2.586a1 1 0 0 0-1.414 0"></path>
</svg>
;
};

function FolderCustomOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderCustomOpenSvg} {...props} />
};

export default FolderCustomOpenIcon;
