import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderExamplesOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #009688)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #b2dfdb)" d="M16 14v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2H18a2 2 0 0 0-2 2m2 0h2a2 2 0 0 1-2 2Zm0 4a4 4 0 0 0 4-4h2a6.005 6.005 0 0 1-6 6Zm0 8 4-4 1.6 1.6L26 20l4 6Z"></path>
</svg>
;
};

function FolderExamplesOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderExamplesOpenSvg} {...props} />
};

export default FolderExamplesOpenIcon;
