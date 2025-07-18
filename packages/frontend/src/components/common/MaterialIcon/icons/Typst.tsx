import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function TypstSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #0097a7)" d="M21.98 24.84A10.8 10.8 0 0 1 19.72 26a4.3 4.3 0 0 1-1.46.3 2.4 2.4 0 0 1-1.93-.64c-.36-.42-.33-1.25-.33-2.48V14h4v-4h-4V2l-6 2v6H8v4h2v9.91q0 3.405 1.59 4.77A6.64 6.64 0 0 0 15.94 30a4 4 0 0 0 .47-.03c1.54-.15 3.4-1.08 5.59-2.77.31-.24.63-.49.95-.76Z"></path>
</svg>
;
};

function TypstIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={TypstSvg} {...props} />
};

export default TypstIcon;
