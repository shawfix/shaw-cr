import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function SchemeSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #f44336)" d="M5.11 21.186 9.887 7.303 8.945 5.11H7.407V2.813h2.296c.483 0 .896.299 1.068.724l6.58 15.353h1.539v2.296h-2.297a1.14 1.14 0 0 1-1.068-.735L11.231 10.45 7.544 21.186z"></path>
</svg>
;
};

function SchemeIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={SchemeSvg} {...props} />
};

export default SchemeIcon;
