import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ActionscriptSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="1em" height="1em">
  <path fill="var(--material-icon-color, #f44336)" d="M560-160v-80h120q17 0 28.5-11.5T720-280v-80q0-38 22-69t58-44v-14q-36-13-58-44t-22-69v-80q0-17-11.5-28.5T680-720H560v-80h120q50 0 85 35t35 85v80q0 17 11.5 28.5T840-560h40v160h-40q-17 0-28.5 11.5T800-360v80q0 50-35 85t-85 35zm-280 0q-50 0-85-35t-35-85v-80q0-17-11.5-28.5T120-400H80v-160h40q17 0 28.5-11.5T160-600v-80q0-50 35-85t85-35h120v80H280q-17 0-28.5 11.5T240-680v80q0 38-22 69t-58 44v14q36 13 58 44t22 69v80q0 17 11.5 28.5T280-240h120v80z"></path>
  <path fill="var(--material-icon-color, #f44336)" d="M360-600h80v40h-80zm80 240h40v-200h-40v80h-80v-80h-40v200h40v-80h80zm200-200v-40H530a10 10 0 0 0-10 10v100a10 10 0 0 0 10 10h70v80h-80v40h110a10 10 0 0 0 10-10v-140a10 10 0 0 0-10-10h-70v-40z"></path>
</svg>
;
};

function ActionscriptIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ActionscriptSvg} {...props} />
};

export default ActionscriptIcon;
