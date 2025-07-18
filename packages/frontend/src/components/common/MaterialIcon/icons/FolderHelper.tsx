import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderHelperSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #afb42b)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #f0f4c3)" d="M28.178 12a1.57 1.57 0 0 0-1.138.467l-4.62 4.691 4.493 4.555 4.628-4.684a1.646 1.646 0 0 0 0-2.28l-2.259-2.282A1.54 1.54 0 0 0 28.178 12m-6.521 5.924-4.739 4.803a1.635 1.635 0 0 0 .008 2.291l.008.008C15.963 26.017 14.978 27.01 14 28h4.5l.684-.693a1.58 1.58 0 0 0 2.234-.016l4.732-4.803"></path>
</svg>
;
};

function FolderHelperIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderHelperSvg} {...props} />
};

export default FolderHelperIcon;
