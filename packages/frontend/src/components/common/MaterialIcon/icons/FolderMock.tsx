import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderMockSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #8d6e63)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #d7ccc8)" d="M16 24.667V28h3.333l9.83-9.83-3.333-3.333Zm15.74-9.074a.885.885 0 0 0 .001-1.252v-.001l-2.08-2.08a.885.885 0 0 0-1.253-.001l-1.627 1.627 3.333 3.333Z"></path>
</svg>
;
};

function FolderMockIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderMockSvg} {...props} />
};

export default FolderMockIcon;
