import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function WxtSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #00c853)" d="M14 8.9c.117 1.136-.854 2.043-2 2.1v2c0 .663-.337 1-1 1H8v-1c0-1.52-2-1.34-2 0v1H3c-.663 0-1-.337-1-1v-3h1s1-.1 1-1-1-1-1-1H2V5c0-.663.337-1 1-1h2c.025-1.06.885-1.995 2-2 1.123-.005 1.996.93 2 2h2c.663 0 1 .337 1 1v2c1.082.067 2.117.798 2 2m-3 1h1c.497 0 1-.503 1-1s-.503-1-1-1h-1V5H8V4c0-.497-.503-1-1-1s-1 .503-1 1v1H3v2c1.148.341 1.98.744 2 2 .02 1.226-.707 1.666-2 2v2h2c.156-1.452 1.055-1.948 2-2 1-.056 2.098.695 2 2h2z"></path>
</svg>
;
};

function WxtIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={WxtSvg} {...props} />
};

export default WxtIcon;
