import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderElementOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ab47bc)" d="M29 12H9.4a2 2 0 0 0-1.9 1.4L4 24V10h24a2 2 0 0 0-2-2H15.1a2 2 0 0 1-1.3-.5l-1.2-1a2 2 0 0 0-1.3-.5H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.8-11.2A2 2 0 0 0 29 12"></path>
  <path fill="var(--material-icon-color, #e1bee7)" d="m21.15 25.74-8.3-5.2A1.8 1.8 0 0 1 12 19v-.98l9.15 5.72a1.6 1.6 0 0 0 1.7 0L32 18v1a1.8 1.8 0 0 1-.85 1.53l-8.3 5.21a1.6 1.6 0 0 1-1.7 0m0 4-8.3-5.2A1.8 1.8 0 0 1 12 23v-.98l9.15 5.72a1.6 1.6 0 0 0 1.7 0L32 22v1a1.8 1.8 0 0 1-.85 1.53l-8.3 5.21a1.6 1.6 0 0 1-1.7 0m-.08-19.46L12 16l9.07 5.73c.56.36 1.29.36 1.85 0L31.99 16l-9.07-5.72a1.68 1.68 0 0 0-1.85 0"></path>
</svg>
;
};

function FolderElementOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderElementOpenSvg} {...props} />
};

export default FolderElementOpenIcon;
