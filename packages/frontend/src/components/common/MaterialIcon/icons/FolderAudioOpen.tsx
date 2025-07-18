import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderAudioOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ef5350)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #ffcdd2)" d="M31.5 12h-5a.5.5 0 0 0-.5.5v8.055a3.9 3.9 0 0 0-3.232-.357 3.999 3.999 0 0 0 1.856 7.755A4.1 4.1 0 0 0 28 23.847V16h3.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5"></path>
</svg>
;
};

function FolderAudioOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderAudioOpenSvg} {...props} />
};

export default FolderAudioOpenIcon;
