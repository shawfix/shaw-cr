import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderJobOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ffa000)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #ffecb3)" d="M30 14h-4v-2l-2-2h-4l-2 2v2h-4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2m-10-2h4v2h-4Zm6 10-7.023 4-1.014-1.725 5.558-3.27-5.558-3.269 1.014-1.724L26 20Z"></path>
</svg>
;
};

function FolderJobOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderJobOpenSvg} {...props} />
};

export default FolderJobOpenIcon;
