import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderPrismaOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #00bfa5)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #a7ffeb)" d="m30.209 26.275-9.76 2.39a.42.42 0 0 1-.51-.224.3.3 0 0 1-.012-.165l3.486-13.827a.35.35 0 0 1 .412-.21.34.34 0 0 1 .221.15l6.457 11.352a.362.362 0 0 1-.218.51zm1.672-.564-7.475-13.144a1.335 1.335 0 0 0-1.647-.453 1.2 1.2 0 0 0-.468.357l-8.106 10.873a.87.87 0 0 0 .014 1.092l3.964 5.083a1.41 1.41 0 0 0 1.432.435l11.503-2.816a1.22 1.22 0 0 0 .79-.567.86.86 0 0 0-.007-.86"></path>
</svg>
;
};

function FolderPrismaOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderPrismaOpenSvg} {...props} />
};

export default FolderPrismaOpenIcon;
