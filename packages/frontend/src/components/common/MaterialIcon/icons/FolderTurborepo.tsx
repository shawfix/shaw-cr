import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderTurborepoSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" width="1em" height="1em">
  <defs>
    <linearGradient id="a" x1="30.58" x2="17.816" y1="13.808" y2="26.573" gradientUnits="userSpaceOnUse">
      <stop offset=".15" stop-color="#2196f3"></stop>
      <stop offset=".85" stop-color="#f50057"></stop>
    </linearGradient>
  </defs>
  <path fill="var(--material-icon-color, #546e7a)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #cfd8dc)" d="M23 16a3 3 0 1 1-3 3 3 3 0 0 1 3-3m0-2a5 5 0 1 0 5 5 5 5 0 0 0-5-5"></path>
  <path fill="var(--material-icon-color, url(#a))" d="M16 20a7.1 7.1 0 0 0 1.5 3.41l-1.421 1.426A9.05 9.05 0 0 1 14 20Zm15.944-2.003A9.015 9.015 0 0 0 24 10v2a7.085 7.085 0 0 1 0 14v2a9.03 9.03 0 0 0 7.944-10.003m-14.414 8.23A9.07 9.07 0 0 0 22 28v-2a7.1 7.1 0 0 1-3.03-1.218Z"></path>
</svg>
;
};

function FolderTurborepoIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderTurborepoSvg} {...props} />
};

export default FolderTurborepoIcon;
