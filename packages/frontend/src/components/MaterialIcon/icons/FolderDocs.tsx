import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderDocsSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #0277bd)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #b3e5fc)" d="M24 10h-7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V16Zm0 16h-6v-2h6Zm4-4H18v-2h10Zm-4.828-5.172V12L28 16.828Z"></path>
</svg>
;
};

function FolderDocsIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderDocsSvg} {...props} />
};

export default FolderDocsIcon;
