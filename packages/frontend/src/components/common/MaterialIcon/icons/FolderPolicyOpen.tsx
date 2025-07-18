import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderPolicyOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #0288d1)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #90caf9)" d="m21.972 21.668.697.696a1.004 1.004 0 0 0 1.414 0l5.626-5.623a1.003 1.003 0 0 0 0-1.413l-.697-.707a1.004 1.004 0 0 0-1.414 0l-.707.707-1.404-1.404a1.003 1.003 0 0 0 0-1.413.99.99 0 0 0-1.404 0l-1.414-1.423.707-.687a.99.99 0 0 0 0-1.403l-.707-.707a.99.99 0 0 0-1.404 0l-5.636 5.633a.99.99 0 0 0 0 1.404l.707.706a.99.99 0 0 0 1.404 0l.717-.706 1.394 1.413-9.56 9.555a1.003 1.003 0 0 0 0 1.413.99.99 0 0 0 1.404 0l9.57-9.565 1.404 1.404-.697.706a.985.985 0 0 0 0 1.414M24 26h6a2 2 0 0 1 2 2v2H22v-2a2 2 0 0 1 2-2"></path>
</svg>
;
};

function FolderPolicyOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderPolicyOpenSvg} {...props} />
};

export default FolderPolicyOpenIcon;
