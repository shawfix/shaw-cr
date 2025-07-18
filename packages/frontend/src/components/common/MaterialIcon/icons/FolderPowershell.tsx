import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderPowershellSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #03a9f4)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #b3e5fc)" d="M31.25 14.034a1 1 0 0 0-.285-.034H14.496a1.03 1.03 0 0 0-.996.731l-3.461 12A1.007 1.007 0 0 0 11.035 28h16.469a1.03 1.03 0 0 0 .996-.731l3.461-12a1.007 1.007 0 0 0-.71-1.235ZM15.001 26a1 1 0 0 1-.556-1.832l4.986-3.323-3.138-3.138a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1-.152 1.54l-6 4A1 1 0 0 1 15 26ZM26 26h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2"></path>
</svg>
;
};

function FolderPowershellIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderPowershellSvg} {...props} />
};

export default FolderPowershellIcon;
