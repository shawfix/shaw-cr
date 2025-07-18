import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function NodejsAltSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #388e3c)" d="M15.354 2.831 4.647 8.861A1.25 1.25 0 0 0 4 9.953V22.03a1.26 1.26 0 0 0 .646 1.095l10.709 6.039a1.32 1.32 0 0 0 1.294 0l10.705-6.038A1.26 1.26 0 0 0 28 22.03V9.96a1.25 1.25 0 0 0-.647-1.093L16.65 2.836a1.32 1.32 0 0 0-1.294 0Z"></path>
  <path fill="var(--material-icon-color, #4caf50)" d="M4.305 22.784a1.3 1.3 0 0 0 .381.328l9.185 5.18 1.53.862a1.3 1.3 0 0 0 .745.166 1.4 1.4 0 0 0 .254-.046L27.693 9.082a1.3 1.3 0 0 0-.294-.234L20.38 4.894l-3.705-2.082a1.3 1.3 0 0 0-.335-.13Z"></path>
  <path fill="var(--material-icon-color, #66bb6a)" d="M27.693 22.784a1.3 1.3 0 0 1-.38.328l-9.185 5.18-1.53.862a1.3 1.3 0 0 1-.745.166 1.4 1.4 0 0 1-.254-.046L4.305 9.08a1.3 1.3 0 0 1 .295-.234l7.018-3.952 3.705-2.082a1.3 1.3 0 0 1 .335-.13Z"></path>
</svg>
;
};

function NodejsAltIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={NodejsAltSvg} {...props} />
};

export default NodejsAltIcon;
