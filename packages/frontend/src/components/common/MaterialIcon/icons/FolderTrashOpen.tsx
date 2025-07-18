import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderTrashOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 512 512" width="1em" height="1em">
  <path fill="var(--material-icon-color, #F44336)" d="M463.47 192H151.06c-13.77 0-26 8.82-30.35 21.89L64 384V160h384c0-17.67-14.33-32-32-32H241.98a32 32 0 0 1-20.48-7.42l-20.6-17.15c-5.75-4.8-13-7.43-20.48-7.43H64c-17.67 0-32 14.33-32 32v256c0 17.67 14.33 32 32 32h352l76.88-179.39c1.7-3.98 2.59-8.28 2.59-12.61 0-17.67-14.33-32-32-32"></path>
  <path fill="var(--material-icon-color, #FFCDD2)" d="M320 160v32h-96v32h32v192c0 17.63 14.38 32 32 32h160c17.63 0 32-14.37 32-32V224h32v-32h-96v-32zm0 96v128h32V256zm64 0v128h32V256z"></path>
</svg>
;
};

function FolderTrashOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderTrashOpenSvg} {...props} />
};

export default FolderTrashOpenIcon;
