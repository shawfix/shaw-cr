import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderStorybookOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ff4081)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #ffcdd2)" d="M23.506 15.814c0 .543 3.755.286 4.262-.1 0-3.743-2.044-5.714-5.784-5.714-3.726 0-5.814 2-5.814 5 0 5.214 7.147 5.314 7.147 8.157a1.147 1.147 0 0 1-1.275 1.286c-1.146 0-1.595-.572-1.537-2.529 0-.428-4.35-.557-4.48 0C15.692 26.63 18.678 28 22.1 28c3.29 0 5.9-1.743 5.9-4.886 0-5.6-7.248-5.443-7.248-8.214a1.193 1.193 0 0 1 1.348-1.286c.522 0 1.478.1 1.391 2.2ZM6 10.492l.192-4.673h3.654L10 10.34a.288.288 0 0 1-.462.23L8.135 9.454l-1.673 1.27A.288.288 0 0 1 6 10.491Z"></path>
</svg>
;
};

function FolderStorybookOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderStorybookOpenSvg} {...props} />
};

export default FolderStorybookOpenIcon;
