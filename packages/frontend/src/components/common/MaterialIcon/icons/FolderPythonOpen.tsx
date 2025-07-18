import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderPythonOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #42a5f5)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #0277bd)" d="M21.123 10a2.574 2.574 0 0 0-2.574 2.574v1.512h3.86c.352 0 .64.513.64.864h-6.426a2.574 2.574 0 0 0-2.574 2.574v3.404A2.57 2.57 0 0 0 16.62 23.5h1.065v-2.412a2.565 2.565 0 0 1 2.556-2.574h4.734a2.565 2.565 0 0 0 2.574-2.556v-3.384A2.574 2.574 0 0 0 24.975 10zm-.648 1.449c.36 0 .648.109.648.64s-.288.8-.648.8c-.351 0-.64-.27-.64-.8s.289-.64.64-.64"></path>
  <path fill="var(--material-icon-color, #fdd835)" d="M28.412 14.5v2.412a2.565 2.565 0 0 1-2.556 2.574h-4.733a2.565 2.565 0 0 0-2.574 2.556v3.382A2.574 2.574 0 0 0 21.12 28h3.854a2.574 2.574 0 0 0 2.574-2.574v-1.513h-3.862c-.351 0-.638-.512-.638-.863h6.426a2.574 2.574 0 0 0 2.574-2.574v-3.403a2.574 2.574 0 0 0-2.574-2.573Zm-8.675 4.063-.004.003q.017-.003.034-.003Zm5.886 6.547c.35 0 .639.27.639.801a.64.64 0 0 1-.64.64c-.36 0-.647-.109-.647-.64s.288-.8.648-.8Z"></path>
</svg>
;
};

function FolderPythonOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderPythonOpenSvg} {...props} />
};

export default FolderPythonOpenIcon;
