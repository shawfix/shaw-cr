import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function AdobeIllustratorLightSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <rect width="28" height="28" x="2" y="2" fill="#795548" rx="4"></rect>
  <path fill="var(--material-icon-color, #ffb74d)" d="M20.988 9.999a.96.96 0 0 1-.687-.269 1 1 0 0 1-.263-.704.9.9 0 0 1 .278-.681 1 1 0 0 1 .687-.268.93.93 0 0 1 .703.268 1.046 1.046 0 0 1-.015 1.385.9.9 0 0 1-.703.268M20 12h2v10h-2zm-5.63-1.98-.01-.02h-2.08a.12.12 0 0 0-.1.13 4.5 4.5 0 0 1-.06.74c-.05.13-.08.26-.12.37l-.27.78L8 22h2.14l.75-2h5.24l.79 2h2.16zM11.64 18l1.8-4.84.01.04.02.04L14.95 17l.39 1z"></path>
</svg>
;
};

function AdobeIllustratorLightIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={AdobeIllustratorLightSvg} {...props} />
};

export default AdobeIllustratorLightIcon;
