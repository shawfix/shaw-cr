import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderTypescriptOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #0288d1)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #90caf9)" d="M24 19.06a1.33 1.33 0 0 0 .3 1.04 2.5 2.5 0 0 0 .61.28c.54.18 1.33.37 2.09.62 2.64.88 2.96 2.32 2.99 3.49.01.16.01.31.01.46V25c0 1.06-.46 2.79-3.44 2.98-.13.01-.25.01-.37.01A1 1 0 0 1 26 28h-4v-1.76l.24-.24H26a2 2 0 0 0 .25-.01h.17c.18-.01.33-.03.47-.04a2 2 0 0 0 .27-.06c.07-.02.13-.04.19-.06a.04.04 0 0 0 .03-.01c.49-.18.59-.45.61-.66A1 1 0 0 0 28 25c0-.32-.68-1.23-3-2-2.74-.91-2.98-2.42-2.99-3.61a.6.6 0 0 1-.01-.13V19a2.85 2.85 0 0 1 .45-1.59c.04-.06.07-.11.11-.16.01-.01.01-.02.02-.03a1 1 0 0 1 .18-.2A4.3 4.3 0 0 1 25.91 16H30v2h-4c-.13 0-.26 0-.39.01-1.18.06-1.49.4-1.58.7a.13.13 0 0 0-.01.06A1 1 0 0 0 24 19ZM18 28h-2V18h-4v-2h10v2h-4Z"></path>
</svg>
;
};

function FolderTypescriptOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderTypescriptOpenSvg} {...props} />
};

export default FolderTypescriptOpenIcon;
