import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderSrcTauriSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #455a64)" d="m13.843 7.536-1.288-1.072A2 2 0 0 0 11.275 6H3.999a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.123a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #ffca28)" d="M27.157 16.551c0 1.319-1.43 2.143-2.573 1.483a1.7 1.7 0 0 1-.355-.271c-.934-.933-.506-2.525.768-2.867a1.716 1.716 0 0 1 2.16 1.655"></path>
  <path fill="var(--material-icon-color, #26c6da)" d="M22.556 19.744c-.947 0-1.715.767-1.715 1.712 0 .946.768 1.713 1.715 1.713.949 0 1.717-.767 1.717-1.713 0-.945-.768-1.712-1.717-1.712"></path>
  <path fill="var(--material-icon-color, #ffca28)" d="M28.996 22.041a6.6 6.6 0 0 1-2.261.918 4.6 4.6 0 0 0 .226-2.07 4.593 4.593 0 0 0 .521-8.455 4.6 4.6 0 0 0-5.775 1.44 7.6 7.6 0 0 0-2.51.731 6.55 6.55 0 0 1 12.798 2.191 6.54 6.54 0 0 1-2.999 5.245m-9.722-6.245 1.607.195a4.6 4.6 0 0 1 .203-.911 6.6 6.6 0 0 0-1.81.716" clip-rule="evenodd"></path>
  <path fill="var(--material-icon-color, #26c6da)" d="M18.995 15.967a6.6 6.6 0 0 1 2.276-.926 4.6 4.6 0 0 0-.257 2.079 4.6 4.6 0 0 0-2.863 3.005c-.893 2.969 1.352 5.951 4.454 5.916a4.6 4.6 0 0 0 3.687-1.914 7.7 7.7 0 0 0 2.509-.724 6.553 6.553 0 0 1-10.212 3.266c-3.617-2.742-3.41-8.24.406-10.702m9.72 6.245-.03.016z" clip-rule="evenodd"></path>
</svg>
;
};

function FolderSrcTauriIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderSrcTauriSvg} {...props} />
};

export default FolderSrcTauriIcon;
