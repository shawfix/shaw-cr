import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ModernizrSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #e91e63)" d="M10 10v4H6v4H2v4h12V10zm8 0v12h12a12 12 0 0 0-12-12"></path>
</svg>
;
};

function ModernizrIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ModernizrSvg} {...props} />
};

export default ModernizrIcon;
