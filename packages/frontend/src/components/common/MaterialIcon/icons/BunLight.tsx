import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function BunLightSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #FFF8E1)" d="M15.696 27.002a13.73 13.73 0 0 1-9.071-3.062 8.86 8.86 0 0 1-3.6-6.505c-.252-5.091 3.813-7.747 8.748-10.455.28-.165.537-.322.793-.48a7.8 7.8 0 0 1 3.52-1.5 2 2 0 0 1 .695.118 14.8 14.8 0 0 1 2.95 1.576c.972.6 2.182 1.348 3.707 2.173a10.14 10.14 0 0 1 5.274 6.147A8.8 8.8 0 0 1 29 17.035a8.15 8.15 0 0 1-2.525 5.959 15.6 15.6 0 0 1-10.778 4.008Z"></path>
  <path fill="var(--material-icon-color, #37474f)" d="M16.087 6a1 1 0 0 1 .358.06l.038.013.037.012a14.5 14.5 0 0 1 2.684 1.46 72 72 0 0 0 3.767 2.205 9.17 9.17 0 0 1 4.767 5.493A8 8 0 0 1 28 17.055a7.18 7.18 0 0 1-2.234 5.233 14.6 14.6 0 0 1-10.07 3.714 12.74 12.74 0 0 1-8.415-2.816l-.027-.024-.029-.023a7.98 7.98 0 0 1-3.202-5.758c-.223-4.516 3.431-6.89 8.231-9.525l.027-.015.027-.015q.389-.231.783-.474A7.4 7.4 0 0 1 16.087 6m0-2c-1.618 0-3.248 1.19-4.795 2.103-4.52 2.481-9.56 5.41-9.267 11.376a9.9 9.9 0 0 0 3.942 7.215 14.77 14.77 0 0 0 9.73 3.308c7.122 0 14.335-4.134 14.303-10.957a9.6 9.6 0 0 0-.322-2.29 11.16 11.16 0 0 0-5.764-6.768c-3.495-1.89-5.242-3.326-6.798-3.811A3 3 0 0 0 16.086 4Z"></path>
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

function BunLightIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={BunLightSvg} {...props} />
};

export default BunLightIcon;
