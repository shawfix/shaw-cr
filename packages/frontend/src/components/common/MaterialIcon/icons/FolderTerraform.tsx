import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderTerraformSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #5c6bc0)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #c5cae9)" d="M27.03 22.993 32 19.84v-6.316l-4.97 3.16m-5.516-3.16 4.97 3.16v6.31l-4.969-3.157M16 16.313l4.97 3.156v-6.313L16 10m5.516 16.844L26.486 30v-6.313l-4.97-3.156"></path>
</svg>
;
};

function FolderTerraformIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderTerraformSvg} {...props} />
};

export default FolderTerraformIcon;
