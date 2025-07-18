import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function PuppeteerSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #00bfa5)" d="M2.822 19.073q-.159 0-.159-.292l-.013-2.138q0-.16.013-.173.066-.2 3.307-2.298 3.24-2.085 3.254-2.152-.173-.239-3.413-2.35-3.148-2.033-3.148-2.232V5.233q0-.305.213-.305h1.912q.252 0 3.56 2.497 3.32 2.497 3.586 2.497.292 0 3.639-2.484t3.546-2.484h2.045q.186 0 .186.36 0 .37-.026 1.115t-.027 1.115q0 .067-.61.492-1.966 1.248-5.871 3.772-.093.066-.2.226.094.186 3.414 2.297 3.267 2.085 3.267 2.271v2.099q0 .345-.186.345h-2.045q-.332 0-3.626-2.484-3.294-2.47-3.466-2.47-.213 0-3.613 2.484-3.387 2.497-3.626 2.497z" aria-label="X"></path>
</svg>
;
};

function PuppeteerIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={PuppeteerSvg} {...props} />
};

export default PuppeteerIcon;
