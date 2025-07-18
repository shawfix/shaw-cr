import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function PlasticSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <g fill="#ff9800">
    <path d="M13.175 4.272 8.66 1.687a1.33 1.33 0 0 0-1.32 0L2.826 4.272a1.33 1.33 0 0 0-.668 1.153v5.151c0 .477.246.873.66 1.11l.64.364.019-6.043c0-.128.028-.26.071-.376.086-.21.243-.4.446-.516L7.49 3.113a1.03 1.03 0 0 1 1.022 0l3.496 2.002a1.03 1.03 0 0 1 .517.892v3.989c0 .369-.198.71-.517.893l-3.496 2a1 1 0 0 1-.515.136v1.464c.229 0 .459-.059.662-.175l4.515-2.586c.413-.236.668-.676.668-1.153v-5.15a1.32 1.32 0 0 0-.667-1.153"></path>
    <path d="m8.367 11.506 2.507-1.436a.74.74 0 0 0 .37-.64V6.57a.75.75 0 0 0-.37-.64L8.367 4.495a.74.74 0 0 0-.734 0L5.127 5.93a.75.75 0 0 0-.372.64l-.01 6.207 1.339.75V10.62l1.55.887a.73.73 0 0 0 .733 0zM6.295 9.229a.44.44 0 0 1-.22-.38V7.151a.44.44 0 0 1 .22-.38l1.489-.852a.44.44 0 0 1 .435 0l1.489.852a.44.44 0 0 1 .22.38V8.85a.44.44 0 0 1-.221.38l-1.489.852a.44.44 0 0 1-.435.001z"></path>
  </g>
</svg>
;
};

function PlasticIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={PlasticSvg} {...props} />
};

export default PlasticIcon;
