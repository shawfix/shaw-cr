import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderLinuxSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #f9a825)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #ffecb3)" d="M24.62 16.35c-.42.28-1.75 1.04-1.95 1.19a.825.825 0 0 1-1.14-.01c-.2-.16-1.53-.92-1.95-1.19-.48-.309-.45-.699.08-.919a6.16 6.16 0 0 1 4.91.03c.49.21.51.6.05.9Zm7.218 7.279A19.1 19.1 0 0 0 28 17.971a4.3 4.3 0 0 1-1.06-1.88c-.1-.33-.17-.67-.24-1.01a11.3 11.3 0 0 0-.7-2.609 4.06 4.06 0 0 0-3.839-2.47 4.2 4.2 0 0 0-3.95 2.4 6 6 0 0 0-.46 1.34c-.17.76-.32 1.55-.5 2.319a3.4 3.4 0 0 1-.959 1.71 19.5 19.5 0 0 0-3.88 5.348 6 6 0 0 0-.37.88c-.19.66.29 1.12.99.96.44-.09.88-.18 1.3-.31.41-.15.57-.05.67.35a6.73 6.73 0 0 0 4.24 4.498c4.119 1.56 8.928-.66 9.968-4.578.07-.27.17-.37.47-.27.46.14.93.24 1.4.35a.724.724 0 0 0 .92-.64 1.44 1.44 0 0 0-.16-.73Z"></path>
</svg>
;
};

function FolderLinuxIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderLinuxSvg} {...props} />
};

export default FolderLinuxIcon;
