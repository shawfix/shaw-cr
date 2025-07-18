import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderStylusSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #c0ca33)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #f0f4c3)" d="M27.644 24.544c1.961-2.364 2.191-4.804.674-9.335-.962-2.867-2.556-5.074-1.384-6.855 1.248-1.898 3.902-.058 1.69 2.48l.44.307c2.652.311 3.96-3.35 1.98-4.394-5.225-2.75-9.797 2.536-7.782 8.654.867 2.597 2.078 5.347 1.097 7.536a4.85 4.85 0 0 1-3.574 3.02c-2.286.114-.766-5.17 1.864-6.487.23-.115.558-.27.25-.658a5.744 5.744 0 0 0-6.244 3.253c-3.191 6.14 6.05 8.405 10.989 2.479"></path>
</svg>
;
};

function FolderStylusIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderStylusSvg} {...props} />
};

export default FolderStylusIcon;
