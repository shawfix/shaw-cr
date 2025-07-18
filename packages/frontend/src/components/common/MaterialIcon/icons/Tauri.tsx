import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function TauriSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ffca28)" d="M165.09 99.183a20.153 20.153 0 0 1-34.401 14.25 20.152 20.152 0 1 1 34.4-14.25z"></path>
  <path fill="var(--material-icon-color, #26c6da)" d="M111.04 136.74c-11.13 0-20.152 9.022-20.152 20.151 0 11.13 9.022 20.152 20.152 20.152 11.129 0 20.152-9.022 20.152-20.152 0-11.129-9.023-20.15-20.152-20.15z"></path>
  <path fill="var(--material-icon-color, #ffca28)" d="M186.7 163.76a77 77 0 0 1-26.564 10.81 54.04 54.04 0 0 0 2.657-24.366 54.05 54.05 0 0 0 33.856-35.246 54.04 54.04 0 0 0-27.73-64.21 54.044 54.044 0 0 0-67.863 16.927 89.8 89.8 0 0 0-29.495 8.61 76.94 76.94 0 0 1 86.49-53.058 76.94 76.94 0 0 1 63.888 78.829 76.94 76.94 0 0 1-35.24 61.706zM72.48 90.298l18.869 2.29a54 54 0 0 1 2.381-10.717 77 77 0 0 0-21.25 8.427" clip-rule="evenodd"></path>
  <path fill="var(--material-icon-color, #26c6da)" d="M69.182 92.314a76.9 76.9 0 0 1 26.747-10.9 53.95 53.95 0 0 0-3.023 24.457 54.05 54.05 0 0 0-33.64 35.358 54.04 54.04 0 0 0 52.354 69.6 54.04 54.04 0 0 0 43.298-22.52 89.8 89.8 0 0 0 29.495-8.518 76.94 76.94 0 0 1-50.002 50.423 76.94 76.94 0 0 1-69.992-11.992A76.944 76.944 0 0 1 69.18 92.315zm114.22 73.462-.366.183z" clip-rule="evenodd"></path>
</svg>
;
};

function TauriIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={TauriSvg} {...props} />
};

export default TauriIcon;
