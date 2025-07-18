import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderSrcTauriOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #455a64)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124c-.468 0-.921-.164-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #ffca28)" d="M27.163 16.551c0 1.319-1.428 2.143-2.57 1.483a1.6 1.6 0 0 1-.354-.271 1.714 1.714 0 1 1 2.924-1.212"></path>
  <path fill="var(--material-icon-color, #26c6da)" d="M22.568 19.744a1.713 1.713 0 1 0 0 3.426 1.713 1.713 0 0 0 0-3.426"></path>
  <path fill="var(--material-icon-color, #ffca28)" d="M29 22.041a6.6 6.6 0 0 1-2.259.918 4.6 4.6 0 0 0 .226-2.07 4.596 4.596 0 0 0 .521-8.455 4.594 4.594 0 0 0-5.768 1.44 7.6 7.6 0 0 0-2.507.731 6.54 6.54 0 0 1 7.351-4.511A6.542 6.542 0 0 1 29 22.041m-9.71-6.245 1.605.195a4.7 4.7 0 0 1 .202-.911 6.5 6.5 0 0 0-1.807.716" clip-rule="evenodd"></path>
  <path fill="var(--material-icon-color, #26c6da)" d="M19.011 15.967a6.5 6.5 0 0 1 2.273-.926 4.6 4.6 0 0 0-.257 2.079 4.6 4.6 0 0 0-2.859 3.005c-.892 2.969 1.35 5.951 4.449 5.916a4.6 4.6 0 0 0 3.682-1.914 7.7 7.7 0 0 0 2.506-.724 6.54 6.54 0 0 1-10.2 3.266c-3.612-2.742-3.405-8.24.406-10.702m9.708 6.245-.03.016z" clip-rule="evenodd"></path>
</svg>
;
};

function FolderSrcTauriOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderSrcTauriOpenSvg} {...props} />
};

export default FolderSrcTauriOpenIcon;
