import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderJupyterSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #FF9800)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <g fill="#FFE0B2" data-mit-no-recolor transform="matrix(.7 0 0 .7 10 10)">
    <path d="M6.2 18a22.7 22.7 0 0 0 9.8 2 22.7 22.7 0 0 0 9.8-2 10.002 10.002 0 0 1-19.6 0m0-4a22.7 22.7 0 0 1 9.8-2 22.7 22.7 0 0 1 9.8 2 10.002 10.002 0 0 0-19.6 0"></path>
    <circle cx="27" cy="5" r="3"></circle>
    <circle cx="5" cy="27" r="3"></circle>
    <circle cx="5" cy="5" r="3"></circle>
  </g>
</svg>
;
};

function FolderJupyterIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderJupyterSvg} {...props} />
};

export default FolderJupyterIcon;
