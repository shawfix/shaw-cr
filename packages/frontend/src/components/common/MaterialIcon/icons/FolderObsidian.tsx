import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderObsidianSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 512 512" width="1em" height="1em">
  <path fill="var(--material-icon-color, #673AB7)" d="m221.5 120.58-20.6-17.16A32 32 0 0 0 180.42 96H64c-17.67 0-32 14.33-32 32v256c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32V160c0-17.67-14.33-32-32-32H241.98a32 32 0 0 1-20.48-7.42"></path>
  <g fill="#D1C4E9">
    <path d="M336.2 318.24c8.07-1.51 12.6-2.02 21.66-2.02-34.18-89.72 48.95-139.27 18.63-155.11-17-8.88-52.32 37.77-72.93 56.26l-10.67 37.41c19.77 16.2 36.25 39.63 43.31 63.46m75.04 128.91c13.05 3.85 26.66-5.92 28.52-19.42 1.35-9.81 3.51-20.65 8.24-30.94-2.66-7.51-25.72-71.18-104.74-56.39 7.6 31.4-4.15 64.54-22.83 91.02 33.14.31 59.29 6.45 90.81 15.73"></path>
    <path d="M478.76 346.86c7.02-12.43-16.61-22.28-28.74-50.78-10.52-24.69 4.93-53.82-8.18-66.23l-40.17-38.02c-14.09 38.27-40.29 56.91-17.12 123.38 37.13 6.98 67.48 27.2 77.55 58.42 0 0 13.67-21.49 16.66-26.77m-221.26 5.78c-8.21 18.67 17.96 36.81 43.46 63.29 29-40.73 24.17-88.95-15.12-127.91z"></path>
  </g>
</svg>
;
};

function FolderObsidianIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderObsidianSvg} {...props} />
};

export default FolderObsidianIcon;
