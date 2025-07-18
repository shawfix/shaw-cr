import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderMarkdownSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #0277bd)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #b3e5fc)" d="M22 18v10h-4v-6l-2 2-2-2v6h-4V18h4l2 2 2-2zm10 6-4 5-4-5h2v-6h4v6z"></path>
</svg>
;
};

function FolderMarkdownIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderMarkdownSvg} {...props} />
};

export default FolderMarkdownIcon;
