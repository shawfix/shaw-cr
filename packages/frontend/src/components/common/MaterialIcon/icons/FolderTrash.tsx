import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderTrashSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 512 512" width="1em" height="1em">
  <path fill="var(--material-icon-color, #F44336)" d="m221.5 120.58-20.6-17.16A32 32 0 0 0 180.42 96H64c-17.67 0-32 14.33-32 32v256c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32V160c0-17.67-14.33-32-32-32H241.98a32 32 0 0 1-20.48-7.42"></path>
  <path fill="var(--material-icon-color, #FFCDD2)" d="M320 160v32h-96v32h32v192c0 17.63 14.38 32 32 32h160c17.63 0 32-14.37 32-32V224h32v-32h-96v-32zm0 96v128h32V256zm64 0v128h32V256z"></path>
</svg>
;
};

function FolderTrashIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderTrashSvg} {...props} />
};

export default FolderTrashIcon;
