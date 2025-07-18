import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function HistoireSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #1de9b6)" d="M8.814 1.004a.19.19 0 0 0-.162.09l-5.61 7.529A.247.247 0 0 0 3.25 9H7v5.817c-.001.204.266.25.373.076l5.592-7.567c.087-.14.025-.326-.14-.326H9V1.194a.19.19 0 0 0-.185-.19z"></path>
</svg>
;
};

function HistoireIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={HistoireSvg} {...props} />
};

export default HistoireIcon;
