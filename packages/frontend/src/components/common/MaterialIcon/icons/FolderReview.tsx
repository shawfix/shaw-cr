import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderReviewSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #2196f3)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #bbdefb)" d="M21 14c-4.66 0-9.35 2.91-11 7 1.65 4.09 6.34 7 11 7s9.35-2.91 11-7c-1.65-4.09-6.34-7-11-7m0 12a5 5 0 1 1 5-5 5 5 0 0 1-5 5"></path>
  <circle cx="21" cy="21" r="3" fill="#bbdefb"></circle>
</svg>
;
};

function FolderReviewIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderReviewSvg} {...props} />
};

export default FolderReviewIcon;
