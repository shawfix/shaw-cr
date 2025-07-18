import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderNuxtOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #546e7a)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #00e676)" d="M22.498 27.998h6.927a1.56 1.56 0 0 0 1.127-.617 1.3 1.3 0 0 0 .188-.631 1.26 1.26 0 0 0-.188-.618l-4.685-8.053a1.14 1.14 0 0 0-.443-.443 1.5 1.5 0 0 0-.67-.188 1.29 1.29 0 0 0-1.074.63l-1.182 2.054-2.376-3.986a1.3 1.3 0 0 0-.43-.497 1.52 1.52 0 0 0-1.247 0 1.5 1.5 0 0 0-.51.497l-5.799 9.986a1.2 1.2 0 0 0-.134.618 1.24 1.24 0 0 0 .134.63 1.3 1.3 0 0 0 .497.43 1.3 1.3 0 0 0 .63.188h4.363a4.26 4.26 0 0 0 3.88-2.241l2.12-3.692 1.114-1.933 3.436 5.866h-4.564Zm-4.9-2h-3.04l4.533-7.8 2.28 3.893-1.52 2.667a2.34 2.34 0 0 1-2.267 1.24Z"></path>
</svg>
;
};

function FolderNuxtOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderNuxtOpenSvg} {...props} />
};

export default FolderNuxtOpenIcon;
