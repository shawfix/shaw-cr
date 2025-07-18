import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function HaxeSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 210" width="1em" height="1em">
  <path fill="var(--material-icon-color, #FB8C00)" d="m41.559 104.988 63.43-63.43 63.432 63.43-63.431 63.431z"></path>
  <path fill="var(--material-icon-color, #FFB300)" d="M41.578 105.037 29.973 61.726 18.368 18.415l43.31 11.605 43.312 11.605-31.706 31.706z"></path>
  <path fill="var(--material-icon-color, #FFCA28)" d="M104.735 41.555 61.545 30.01 18.367 18.413l22.927.185 23.228.294 20.263 11.36z"></path>
  <path fill="var(--material-icon-color, #FFEA00)" d="m18.368 18.417 11.597 43.177 11.544 43.19-11.303-19.948-11.36-20.263-.294-23.229z"></path>
  <path fill="var(--material-icon-color, #EF6C00)" d="m104.999 41.579 43.31-11.605 43.312-11.605-11.605 43.311-11.605 43.311-31.706-31.706z"></path>
  <path fill="var(--material-icon-color, #E64A19)" d="m168.49 104.735 11.545-43.19 11.598-43.177-.185 22.927-.294 23.228-11.36 20.264z"></path>
  <path fill="var(--material-icon-color, #FFCA28)" d="m191.628 18.365-43.176 11.597-43.19 11.544 19.948-11.303 20.263-11.36 23.228-.293z"></path>
  <path fill="var(--material-icon-color, #EF6C00)" d="m168.419 104.987 11.605 43.311 11.605 43.311-43.311-11.605-43.311-11.605 31.706-31.706z"></path>
  <path fill="var(--material-icon-color, #FB8C00)" d="m105.261 168.47 43.19 11.544 43.177 11.597-22.927-.185-23.229-.294-20.263-11.36z"></path>
  <path fill="var(--material-icon-color, #E64A19)" d="m191.631 191.617-11.597-43.177-11.545-43.19 11.304 19.948 11.36 20.263.293 23.229z"></path>
  <path fill="var(--material-icon-color, #FFA000)" d="m104.99 168.422-43.31 11.605-43.311 11.605 11.605-43.311 11.605-43.311 31.706 31.706z"></path>
  <path fill="var(--material-icon-color, #FFEA00)" d="m41.51 105.27-11.545 43.19-11.597 43.176.185-22.927.294-23.228 11.36-20.264z"></path>
  <path fill="var(--material-icon-color, #EF6C00)" d="m18.368 191.63 43.176-11.598 43.19-11.544-19.947 11.303-20.264 11.36-23.228.293z"></path>
</svg>
;
};

function HaxeIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={HaxeSvg} {...props} />
};

export default HaxeIcon;
