import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function UmlLightSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="1em" height="1em">
  <path fill="var(--material-icon-color, #9575cd)" d="M67.702 45.716V75.34l19.224-9.85L87 76.653 53.84 93.907l-.038-41.04z"></path>
  <path fill="var(--material-icon-color, #f9a825)" d="m30.116 66.096-4.16-23.69L13 36.077V77.28l8.54 4.378V56.826l4.669 26.817 7.599 3.863 4.885-22.293v24.391l8.576 4.303V52.743l-13.027-6.29z"></path>
  <path fill="var(--material-icon-color, #ec407a)" d="m45.237 6.093-9.775 8.755s19.072 9.931 21.39 11.105c2.317 1.174 5.615 3.43 2.05 6.772-3.565 3.34-7.487 2.889-10.16 1.535a21830 21830 0 0 1-22.458-11.468l-10.07 8.667S35.641 41.482 38.85 43.196c3.208 1.716 15.15 5.959 26.47-2.979 11.318-8.938 9.714-12.188 9.714-12.82s-.267-3.972-2.228-6.049c-1.96-2.076-7.664-5.056-10.07-6.32S45.239 6.093 45.239 6.093z"></path>
</svg>
;
};

function UmlLightIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={UmlLightSvg} {...props} />
};

export default UmlLightIcon;
