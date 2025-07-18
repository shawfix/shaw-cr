import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderSyntaxSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ef5350)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #ffcdd2)" d="m31.87 19.917-1.307-1.378a.477.477 0 0 0-.691-.001l-7.156 7.538-3.057-3.23a.48.48 0 0 0-.345-.148h-.001a.48.48 0 0 0-.345.148l-1.31 1.377a.477.477 0 0 0 0 .657l4.721 4.972a.477.477 0 0 0 .691 0l8.8-9.28a.476.476 0 0 0 0-.655"></path>
  <path fill="var(--material-icon-color, #ffcdd2)" d="M21.292 23.336a.48.48 0 0 0 .448.314h1.94a.476.476 0 0 0 .446-.642l-4.74-12.698a.48.48 0 0 0-.446-.31h-1.724a.48.48 0 0 0-.447.31l-4.74 12.698a.476.476 0 0 0 .447.642h1.94a.48.48 0 0 0 .448-.317l.926-2.612h4.558Zm-1.97-5.523h-2.49l1.245-3.495Z"></path>
</svg>
;
};

function FolderSyntaxIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderSyntaxSvg} {...props} />
};

export default FolderSyntaxIcon;
