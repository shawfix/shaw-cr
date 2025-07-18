import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function BeancountSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #e64a19)" d="M26.471 5.736c7.383 3.577 2.04 13.636-5.547 17.984-5.998 3.44-18.128 5.76-18.877-2.22-.738-7.863 7.61-6.698 11.575-8.67 4.032-2.003 6.854-9.998 12.85-7.093zm-11.684 8.89c-1.167.438-3.695.194-3.479 2.094.215 1.932 3.483.908 5.243.097 1.788-.82 3.415-2.475 2.27-3.496-1.424-1.268-2.421.698-4.034 1.305"></path>
</svg>
;
};

function BeancountIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={BeancountSvg} {...props} />
};

export default BeancountIcon;
