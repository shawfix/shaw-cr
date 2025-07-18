import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function BlenderSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <g fill="#ff9800" fill-rule="evenodd">
    <path d="M14.004 19a5 5 0 0 1 4.993-5.001 5 5 0 0 1 5.008 4.985A5 5 0 0 1 19.028 24a5 5 0 0 1-5.024-4.97z" paint-order="stroke fill markers"></path>
    <path d="m23.148 7.152-4.355-4.451s-1.488-1.534-3.022-.046-.046 3.022-.046 3.022l.165.264c.693.69 1.412 1.368 2.105 2.058h-12s-2 0-2 2 2 2 2 2h4l-6 6-1.332 1.41s-1.503 1.503 0 3.007c1.503 1.503 3.006 0 3.006 0l2.327-2.417.063.19q.06.555.173 1.09a11.02 11.02 0 0 0 8.599 8.508 11 11 0 0 0 2.216.213c6.068-.028 10.967-4.965 10.949-11.034 0-5.452-4-8.967-6.848-11.815zm-4.162 4.847a7 7 0 1 1-6.99 7.044V19a7 7 0 0 1 6.99-7"></path>
  </g>
</svg>
;
};

function BlenderIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={BlenderSvg} {...props} />
};

export default BlenderIcon;
