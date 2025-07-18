import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function NdstSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #0097a7)" d="M8.2 12.2c-.8-.1-1.3.3-1.4 1-.1.9.3 1.3 1.1 1.4s1.2-.3 1.4-1c.1-.7-.3-1.3-1.1-1.4"></path>
  <path fill="var(--material-icon-color, #0097a7)" d="M16 2c-1.4 0-2.8.2-4.1.6.2.7.5 1.3.9 1.9.9 1.5 2.3 2.2 4 2.3.8.1 1.6.1 2.4.1 2.1 0 3.8 2.4 2.9 4.6-.5 1.2-1.1 1.9-2.4 2.1-1.6.2-2.8-.3-3.6-1.7-.1-.3-.3-.6-.4-.9-.2-.6-.4-1.3-.7-1.9-.8-2.3-3.4-3.6-5.7-3.1-.8.1-1.8-.1-2.5-.5C3.8 8.1 2 11.8 2 16c0 7.7 6.3 14 14 14s14-6.3 14-14S23.7 2 16 2m5.8 21.3c-.5 1.2-1.1 1.9-2.4 2.1-1.6.2-2.8-.3-3.6-1.7-.1-.3-.3-.6-.4-.9-.2-.6-.4-1.3-.7-1.9-.9-2.4-3.5-3.6-5.8-3.2-1.3.2-3.2-.5-3.8-1.6-.8-1.3-.7-3.1.1-4.1.5-.6 1.3-1 2.1-1.2h.9c1.5.2 2.4.9 2.9 2.4.3 1.1.7 2.1 1.3 3.1.9 1.5 2.3 2.2 4 2.3.8.1 1.6.1 2.4.1 2.1 0 3.8 2.5 3 4.6"></path>
  <path fill="var(--material-icon-color, #0097a7)" d="M18.4 21.8c-.6.1-.8.6-.8 1.1s.4 1 .7 1.3c.5.3 1.1.3 1.5-.3.1-.1.4-1 .2-1.3-.2-.5-1.4-.8-1.6-.8m1.7-9.7c.1-.1.4-1 .2-1.3-.2-.4-1.4-.7-1.6-.7-.6.1-.8.6-.8 1.1s.4 1 .7 1.3c.5.3 1.2.3 1.5-.4"></path>
</svg>
;
};

function NdstIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={NdstSvg} {...props} />
};

export default NdstIcon;
