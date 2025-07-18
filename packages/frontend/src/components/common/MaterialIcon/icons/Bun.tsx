import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function BunSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #FFF8E1)" d="M30 17.045a9.8 9.8 0 0 0-.32-2.306l-.004.034a11.2 11.2 0 0 0-5.762-6.786c-3.495-1.89-5.243-3.326-6.8-3.811h.003c-1.95-.695-3.949.82-5.825 1.927-4.52 2.481-9.573 5.45-9.28 11.417.008-.029.017-.052.026-.08a9.97 9.97 0 0 0 3.934 7.257l-.01-.006C13.747 31.473 30.05 27.292 30 17.045"></path>
  <path fill="var(--material-icon-color, #37474f)" d="M19.855 20.236A.8.8 0 0 0 19.26 20h-6.514a.8.8 0 0 0-.596.236.51.51 0 0 0-.137.463 4.37 4.37 0 0 0 1.641 2.339 4.2 4.2 0 0 0 2.349.926 4.2 4.2 0 0 0 2.343-.926 4.37 4.37 0 0 0 1.642-2.339.5.5 0 0 0-.132-.463Z"></path>
  <path fill="var(--material-icon-color, #455a64)" d="M9.996 18A2 2 0 1 0 8 15.996V16a2 2 0 0 0 1.996 2"></path>
  <ellipse cx="22.5" cy="18.5" fill="#f8bbd0" rx="2.5" ry="1.5"></ellipse>
  <ellipse cx="9.5" cy="18.5" fill="#f8bbd0" rx="2.5" ry="1.5"></ellipse>
  <circle cx="10" cy="16" r="2" fill="#37474f"></circle>
  <circle cx="22" cy="16" r="2" fill="#37474f"></circle>
  <circle cx="9" cy="15" r="1" fill="#FAFAFA"></circle>
  <circle cx="21" cy="15" r="1" fill="#FAFAFA"></circle>
</svg>
;
};

function BunIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={BunSvg} {...props} />
};

export default BunIcon;
