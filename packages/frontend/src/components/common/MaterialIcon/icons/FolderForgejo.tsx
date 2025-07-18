import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderForgejoSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #757575)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <g fill="none" transform="translate(14.53 10.455)scale(.08531)">
    <path stroke="#FF6D00" stroke-width="25" d="M58 168V70a50 50 0 0 1 50-50h20" class="prefix__prefix__orange"></path>
    <path stroke="#D50000" stroke-width="25" d="M58 168v-30a50 50 0 0 1 50-50h20" class="prefix__prefix__red"></path>
    <circle cx="142" cy="20" r="18" stroke="#FF6D00" stroke-width="15" class="prefix__prefix__orange"></circle>
    <circle cx="142" cy="88" r="18" stroke="#D50000" stroke-width="15" class="prefix__prefix__red"></circle>
    <circle cx="58" cy="180" r="18" stroke="#D50000" stroke-width="15" class="prefix__prefix__red"></circle>
  </g>
</svg>
;
};

function FolderForgejoIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderForgejoSvg} {...props} />
};

export default FolderForgejoIcon;
