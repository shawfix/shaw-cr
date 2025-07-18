import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function PytorchSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <circle cx="20" cy="8" r="2" fill="#f4511e"></circle>
  <path fill="var(--material-icon-color, #f4511e)" d="M25.573 11.335a11.4 11.4 0 0 0-1.1-1.219l-2.825 2.832a9 9 0 0 1 .746.812 7.36 7.36 0 0 1 1.443 3.011 8 8 0 0 1 .164 1.23A8 8 0 0 1 8 18a5.76 5.76 0 0 1 .695-2.762 7.4 7.4 0 0 1 1.277-1.896c.18-.18 1.814-1.746 3.74-3.584L16 7.553V2l-5.057 4.873c-1.112 1.06-3.713 3.545-3.877 3.722a11.5 11.5 0 0 0-1.99 2.942A9.8 9.8 0 0 0 4 18a12 12 0 1 0 24 0 12.6 12.6 0 0 0-.254-2.074 11.26 11.26 0 0 0-2.173-4.591"></path>
</svg>
;
};

function PytorchIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={PytorchSvg} {...props} />
};

export default PytorchIcon;
