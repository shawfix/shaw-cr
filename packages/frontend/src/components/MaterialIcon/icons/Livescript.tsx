import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function LivescriptSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #0277BD)" d="M4 2h4v28H4z"></path>
  <path fill="var(--material-icon-color, #0277BD)" d="M2 24h28v4H2zm8-20h2v18h-2zm2 16h16v2H12zm2-4h14v2H14zm0-12h2v12h-2zm4 8h10v2H18zm0-8h2v8h-2zm4 4h6v2h-6zm0-4h2v4h-2z"></path>
  <path fill="var(--material-icon-color, #0277BD)" d="M6 24.586 23.271 7.315l1.414 1.414L7.415 26z"></path>
</svg>
;
};

function LivescriptIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={LivescriptSvg} {...props} />
};

export default LivescriptIcon;
