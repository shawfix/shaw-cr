import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderGradleSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #0097a7)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #b2ebf2)" d="M31.4 13.692a3.3 3.3 0 0 0-2.869-1.691c-1.097-.022-1.998.592-1.828.996a6 6 0 0 0 .369.726c.183.269.51.061.624 0a1.84 1.84 0 0 1 1.124-.194 1.68 1.68 0 0 1 1.276.98c.832 1.618-1.736 4.945-4.95 2.641a8.34 8.34 0 0 0-7.754-1.077c-1.414.465-2.065.932-1.505 2.012a21 21 0 0 0 1.243 2.232c1.17 1.93 3.733-.888 3.733-.888-1.908 2.846-3.544 2.159-4.172 1.164a16 16 0 0 1-1.004-1.93C10.854 20.386 12.161 28 12.161 28h2.4c.611-2.803 2.8-2.699 3.174 0h1.831c1.621-5.475 5.727 0 5.727 0h2.387c-.67-3.732 1.342-4.907 2.61-7.095 1.268-2.19 2.469-4.868 1.11-7.213m-6.158 7.21a1.28 1.28 0 0 1-.845-1.589q.015-.05.034-.099s1.103.36 2.593.852a1.43 1.43 0 0 1-1.782.836"></path>
</svg>
;
};

function FolderGradleIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderGradleSvg} {...props} />
};

export default FolderGradleIcon;
