import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderVuexStoreOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #009688)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <g data-mit-no-recolor>
    <path fill="#41b883" d="m14 29.989 7.2-14.38 1.8 3.508v3.688l-3.577 7.184ZM32 30l-7.2-14.38-1.8 3.508v3.688L26.566 30Z"></path>
    <path fill="#35495e" d="m14 12 4.5 9 2.7-5.391L19.4 12Zm18 0-4.5 9-2.7-5.391L26.6 12Z"></path>
  </g>
</svg>
;
};

function FolderVuexStoreOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderVuexStoreOpenSvg} {...props} />
};

export default FolderVuexStoreOpenIcon;
