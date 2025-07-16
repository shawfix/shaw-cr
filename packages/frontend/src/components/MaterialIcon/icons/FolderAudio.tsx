import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderAudioSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ef5350)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #ffcdd2)" d="M31.5 12h-5a.5.5 0 0 0-.5.5v8.055a3.9 3.9 0 0 0-3.232-.357 3.999 3.999 0 0 0 1.856 7.755A4.1 4.1 0 0 0 28 23.847V16h3.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5"></path>
</svg>
;
};

function FolderAudioIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderAudioSvg} {...props} />
};

export default FolderAudioIcon;
