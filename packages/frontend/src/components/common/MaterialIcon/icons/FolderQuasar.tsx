import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderQuasarSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #1976d2)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #bbdefb)" d="M24.026 20A2.028 2.028 0 1 1 22 18.048 1.99 1.99 0 0 1 24.026 20m6.967-5.002a10 10 0 0 0-1.59-2.002L27.06 14.3a7.9 7.9 0 0 0-2.445-1.365 9.3 9.3 0 0 0-1.893 2.6 11.74 11.74 0 0 1 7.8 2.618l1.473-.819A9.8 9.8 0 0 0 30.993 15Zm0 10.002A9.8 9.8 0 0 0 32 22.67l-2.342-1.303a7.2 7.2 0 0 0 .005-2.72 10 10 0 0 0-3.285-.278 10.7 10.7 0 0 1 1.545 7.812l1.473.82A10 10 0 0 0 30.993 25m-8.992 5a10.8 10.8 0 0 0 2.597-.326v-2.603a7.9 7.9 0 0 0 2.451-1.357 9.1 9.1 0 0 0-1.392-2.88 11.36 11.36 0 0 1-6.255 5.196v1.64a10.8 10.8 0 0 0 2.599.33m-8.994-5a10 10 0 0 0 1.592 2.004L16.94 25.7a7.8 7.8 0 0 0 2.447 1.365 9.3 9.3 0 0 0 1.891-2.6 11.75 11.75 0 0 1-7.8-2.618l-1.471.819a9.8 9.8 0 0 0 1 2.333Zm0-10A9.8 9.8 0 0 0 12 17.33l2.343 1.303a7.2 7.2 0 0 0-.005 2.72 10 10 0 0 0 3.286.278 10.7 10.7 0 0 1-1.545-7.814l-1.475-.82a10 10 0 0 0-1.597 2.005Zm8.992-5a10.8 10.8 0 0 0-2.597.326v2.603a7.9 7.9 0 0 0-2.45 1.357 9.1 9.1 0 0 0 1.393 2.88A11.35 11.35 0 0 1 24.6 11.97v-1.64A10.8 10.8 0 0 0 22 10Z"></path>
</svg>
;
};

function FolderQuasarIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderQuasarSvg} {...props} />
};

export default FolderQuasarIcon;
