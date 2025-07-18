import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function PrettierSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #F44336)" d="M2 8h4v1H2zm0 6h4v1H2zm9-10h3v1h-3zM2 2h3v1H2z"></path>
  <path fill="var(--material-icon-color, #F9A825)" d="M9 2h3v1H9zm1 4h4v1h-4zm-5 6h1v1H5zm-3-2h6v1H2z"></path>
  <path fill="var(--material-icon-color, #26A69A)" d="M2 12h3v1H2zm7-4h5v1H9zM2 4h4v1H2zm3-2h4v1H5z"></path>
  <path fill="var(--material-icon-color, #BA68C8)" d="M2 6h3v1H2zm7-2h2v1H9zm-1 6h4v1H8z"></path>
</svg>
;
};

function PrettierIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={PrettierSvg} {...props} />
};

export default PrettierIcon;
