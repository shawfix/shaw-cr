import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function DocumentSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="var(--material-icon-color, none)" viewBox="0 0 24 24" width="1em" height="1em">
  <path d="M0 0h24v24H0z"></path>
  <path fill="var(--material-icon-color, #42a5f5)" d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5z"></path>
</svg>
;
};

function DocumentIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={DocumentSvg} {...props} />
};

export default DocumentIcon;
