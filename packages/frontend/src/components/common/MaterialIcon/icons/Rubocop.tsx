import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function RubocopSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #b0bec5)" d="M22 24a2 2 0 0 1-2 2h-2l-1-2h-2l-1 2h-2a2 2 0 0 1-2-2v-2H8v2a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-2h-2Z"></path>
  <path fill="var(--material-icon-color, #b0bec5)" d="M20 24v-2h-8v2h1v-1h6v1zm6.5-10H26a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2h-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2h.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5"></path>
  <path fill="var(--material-icon-color, #E53935)" d="M8 15h16v2H8z" data-mit-no-recolor></path>
  <path fill="var(--material-icon-color, #b0bec5)" d="M23.738 10a7.99 7.99 0 0 0-15.476 0Z"></path>
</svg>
;
};

function RubocopIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={RubocopSvg} {...props} />
};

export default RubocopIcon;
