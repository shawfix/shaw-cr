import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderCobolSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #0288d1)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #b3e5fc)" d="M23.448 10.106a10 10 0 0 0-2.896 0l-.634 1.653a8.5 8.5 0 0 0-2.273.942l-1.618-.72a10 10 0 0 0-2.047 2.046l.721 1.618a8.5 8.5 0 0 0-.942 2.273l-1.653.634a10 10 0 0 0 0 2.896l1.653.634a8.5 8.5 0 0 0 .942 2.273l-.72 1.618a10 10 0 0 0 2.046 2.047l1.618-.721a8.5 8.5 0 0 0 2.273.942l.634 1.653a10 10 0 0 0 2.896 0l.634-1.653a8.5 8.5 0 0 0 2.273-.942l1.618.72a10 10 0 0 0 2.047-2.046l-.721-1.618a8.5 8.5 0 0 0 .942-2.273l1.653-.634a10 10 0 0 0 0-2.896l-1.653-.634a8.5 8.5 0 0 0-.942-2.273l.72-1.618a10 10 0 0 0-2.046-2.047l-1.618.721a8.5 8.5 0 0 0-2.273-.942ZM22 13.592A6.408 6.408 0 1 1 15.592 20 6.41 6.41 0 0 1 22 13.592"></path>
  <path fill="var(--material-icon-color, #b3e5fc)" d="M24.607 22.602a3.62 3.62 0 1 1-.006-5.118l.006.006-1.28 1.278a1.81 1.81 0 1 0-.004 2.56l.004-.004Z"></path>
</svg>
;
};

function FolderCobolIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderCobolSvg} {...props} />
};

export default FolderCobolIcon;
