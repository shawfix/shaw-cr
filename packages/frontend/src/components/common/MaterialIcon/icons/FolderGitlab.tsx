import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderGitlabSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #757575)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <g data-mit-no-recolor>
    <path fill="#e53935" d="m31.35 17.703-.022-.063-2.339-6.097a.6.6 0 0 0-.24-.291.617.617 0 0 0-.928.353l-1.577 4.831h-6.39l-1.58-4.83a.62.62 0 0 0-.926-.354.6.6 0 0 0-.24.29l-2.337 6.1-.024.06a4.34 4.34 0 0 0 1.44 5.017l.009.006.02.015 3.556 2.667 1.764 1.333 1.072.81a.724.724 0 0 0 .873 0l1.072-.811 1.764-1.334 3.583-2.68.01-.008a4.34 4.34 0 0 0 1.44-5.014"></path>
    <path fill="#ef6c00" d="m31.35 17.703-.022-.063a7.9 7.9 0 0 0-3.143 1.413l-5.133 3.883 3.268 2.47 3.581-2.68.011-.009a4.34 4.34 0 0 0 1.44-5.014Z"></path>
    <path fill="#f9a825" d="m19.772 25.405 1.764 1.334 1.072.81a.724.724 0 0 0 .873 0l1.072-.81 1.766-1.334-3.27-2.469Z"></path>
    <path fill="#ef6c00" d="M17.912 19.053a7.9 7.9 0 0 0-3.141-1.412l-.024.062a4.34 4.34 0 0 0 1.44 5.016l.009.006.02.016 3.556 2.666 3.27-2.471Z"></path>
  </g>
</svg>
;
};

function FolderGitlabIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderGitlabSvg} {...props} />
};

export default FolderGitlabIcon;
