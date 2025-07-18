import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function TldrawSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #b0bec5)" d="M14.69 5.75q0 1.058-.808 1.796c-.808.738-1.194.738-1.966.738q-1.195 0-2.002-.738-.808-.737-.808-1.797 0-1.058.808-1.796c.808-.738 1.206-.738 2.002-.738q1.159 0 1.966.738.808.738.808 1.796zm-5.619 8.883q0-1.059.808-1.797.842-.77 2.037-.77a2.82 2.82 0 0 1 1.966.77q.843.738.984 1.668.28 1.733-.703 3.434-.948 1.7-2.74 2.598-.982.514-1.615-.032-.596-.513.352-1.219.525-.353.878-.898.351-.546.456-1.123.036-.257-.246-.257-.702-.032-1.44-.706a2.17 2.17 0 0 1-.737-1.668"></path>
</svg>
;
};

function TldrawIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={TldrawSvg} {...props} />
};

export default TldrawIcon;
