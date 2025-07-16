import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderDownloadSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #4caf50)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #c8e6c9)" d="M26 10v6h4l-7 8-7-8h4v-6zm4 16v2H16v-2Z"></path>
</svg>
;
};

function FolderDownloadIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderDownloadSvg} {...props} />
};

export default FolderDownloadIcon;
