import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderTargetOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #546e7a)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #cfd8dc)" d="m31.304 16.347-1.584 1.584a8 8 0 1 1-5.657-5.657l1.584-1.583a10 10 0 1 0 5.657 5.656"></path>
  <path fill="var(--material-icon-color, #cfd8dc)" d="m22.437 16.022.22-1.987a6 6 0 1 0 5.302 5.304l-1.987.219a4 4 0 1 1-3.535-3.536"></path>
  <path fill="var(--material-icon-color, #cfd8dc)" d="m24.827 14.34-.707 2.12-1.61 1.611a2 2 0 0 0-.99-.01q-.037.01-.072.022a2 2 0 0 0-.367.146q-.054.027-.107.057a2 2 0 1 0 2.735 2.735q.03-.053.056-.108a2 2 0 0 0 .147-.366l.021-.072a2 2 0 0 0-.01-.99l1.611-1.61 2.121-.707 4.243-4.243H29.07v-2.828Z"></path>
</svg>
;
};

function FolderTargetOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderTargetOpenSvg} {...props} />
};

export default FolderTargetOpenIcon;
