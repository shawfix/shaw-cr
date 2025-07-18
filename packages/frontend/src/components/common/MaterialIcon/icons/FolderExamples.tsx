import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderExamplesSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #009688)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #b2dfdb)" d="M16 14v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2H18a2 2 0 0 0-2 2m2 0h2a2 2 0 0 1-2 2Zm0 4a4 4 0 0 0 4-4h2a6.005 6.005 0 0 1-6 6Zm0 8 4-4 1.6 1.6L26 20l4 6Z"></path>
</svg>
;
};

function FolderExamplesIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderExamplesSvg} {...props} />
};

export default FolderExamplesIcon;
