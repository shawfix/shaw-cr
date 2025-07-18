import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function StylableSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="1em" height="1em">
  <g stroke-width=".247">
    <path fill="#66bb6a" d="M10.942 3.615c-1.944.827-6.386 5.085-6.401 8.44.026 3.467 4.457 7.612 6.401 8.439.446.19 1.137.451 1.868.451.666 0 1.23-.328 1.803-1.019.965-1.16.85-2.828-.436-3.775-1.539-1.133-2.798-2.149-2.824-4.097.026-1.947 1.285-3.307 2.824-4.44 1.285-.946 1.536-2.382.571-3.543-.574-.69-1.272-.908-1.938-.908-.73 0-1.422.262-1.868.452"></path>
    <path fill="#01579b" d="M12.711 8.934q-.532.61-.984 1.23c-.502.64-.934 1.314-1.284 1.992l-.004.004-.015.032-.026.052c-.44.874-.746 1.754-.892 2.582l-.002.01c-.568 2.648.237 4.923 2.625 6.025.944.329 1.753-.052 2.49-.89.853-.97.958-2.896-.38-3.82-1.878-1.296-2.836-2.532-2.825-4.116.011-1.57.887-2.627 1.297-3.101"></path>
    <path fill="#ff1744" d="M17.23 26.837c-.663 0-1.358-.218-1.929-.908-.96-1.16-.709-2.595.57-3.541 1.531-1.132 2.783-2.49 2.809-4.437-.026-1.947-1.28-3.24-2.809-4.377-1.13-.84-1.53-2.442-.57-3.602.571-.69 1.266-.908 1.93-.908.726 0 1.414.262 1.858.452 1.934.826 6.336 4.958 6.37 8.435-.01 3.277-4.436 7.608-6.37 8.435-.444.189-1.132.451-1.859.451"></path>
    <path fill="#b71c1c" d="M17.219 9.02c-.717-.011-1.419.324-1.975.953-.857.97-.713 2.711.633 3.636 1.887 1.296 2.787 2.782 2.776 4.366-.013 1.795-1.161 2.919-1.448 3.269a8.7 8.7 0 0 0 1.7-1.656 1.3 1.3 0 0 1-.106.172 8.3 8.3 0 0 0 1.248-2.026c.026-.056.058-.128.09-.207l.025-.06a9.3 9.3 0 0 0 .516-1.75c.135-.655.207-1.352.119-1.936q-.007-.089-.016-.176c-.158-1.946-1.09-3.65-2.845-4.457a2.3 2.3 0 0 0-.717-.128" style="mix-blend-mode:multiply"></path>
  </g>
</svg>
;
};

function StylableIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={StylableSvg} {...props} />
};

export default StylableIcon;
