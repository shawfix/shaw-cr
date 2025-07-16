import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function VueConfigSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #757575)" d="M15 2H6a2.006 2.006 0 0 0-2 2v22a2.006 2.006 0 0 0 2 2h16a2 2 0 0 0 2-2V11Zm3 22H6v-2h12Zm0-4H6v-2h12Zm0-4H6v-2h12Zm-4-4V4l8 8Z" data-mit-no-recolor></path>
  <path fill="var(--material-icon-color, #41b883)" d="m14 16 8 14.093 8-14.024V16h-3.11l-4.843 8.49L17.225 16Z"></path>
  <path fill="var(--material-icon-color, #35495e)" d="m17.225 16 4.821 8.492 4.844-8.491h-2.918l-1.906 3.342-1.9-3.343Z"></path>
</svg>
;
};

function VueConfigIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={VueConfigSvg} {...props} />
};

export default VueConfigIcon;
