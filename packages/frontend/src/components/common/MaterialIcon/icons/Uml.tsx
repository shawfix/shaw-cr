import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function UmlSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="1em" height="1em">
  <path fill="var(--material-icon-color, #b39ddb)" d="M87 76.652 53.84 93.907l-.038-41.04 13.9-7.15v29.622l19.224-9.85z"></path>
  <path fill="var(--material-icon-color, #fbc02d)" d="m38.693 89.604 8.576 4.303V52.743l-13.027-6.29-4.126 19.643-4.16-23.69L13 36.077V77.28l8.54 4.378V56.826l4.669 26.817 7.599 3.863 4.885-22.293z"></path>
  <path fill="var(--material-icon-color, #f06292)" d="m45.237 6.093-9.775 8.755s19.072 9.931 21.39 11.105c2.317 1.173 5.615 3.43 2.05 6.771s-7.487 2.89-10.16 1.535a21830 21830 0 0 1-22.458-11.466l-10.07 8.667S35.642 41.48 38.85 43.196c3.208 1.715 15.15 5.958 26.47-2.98 11.318-8.937 9.714-12.188 9.714-12.82s-.267-3.972-2.228-6.048c-1.96-2.077-7.664-5.056-10.07-6.32S45.239 6.092 45.239 6.092z"></path>
</svg>
;
};

function UmlIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={UmlSvg} {...props} />
};

export default UmlIcon;
