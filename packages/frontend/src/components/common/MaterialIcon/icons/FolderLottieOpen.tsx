import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderLottieOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #00bfa5)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #a7ffeb)" d="M28 10H18a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V14a4 4 0 0 0-4-4m0 5.563a.48.48 0 0 1-.437.464c-1.541.201-2.457 1.49-3.715 3.503-1.233 1.971-2.619 4.19-5.323 4.446a.495.495 0 0 1-.525-.501v-1.038a.48.48 0 0 1 .437-.465c1.541-.2 2.457-1.489 3.715-3.502 1.233-1.971 2.619-4.19 5.323-4.446a.495.495 0 0 1 .525.501Z"></path>
</svg>
;
};

function FolderLottieOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderLottieOpenSvg} {...props} />
};

export default FolderLottieOpenIcon;
