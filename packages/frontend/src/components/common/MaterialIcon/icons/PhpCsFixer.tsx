import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function PhpCsFixerSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ff7043)" d="M22 2c-2.023.139-16.234 1.492-17.227 11.234a43 43 0 0 0-.234 3.135l4.313-4.308a1.5 1.5 0 0 1-.952.339 1.5 1.5 0 0 1-1.5-1.5 1.5 1.5 0 0 1 1.5-1.5 1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1-.349.963l2.476-2.474a.625.625 0 1 1 .885.884l-2.525 2.522A1.5 1.5 0 0 1 10.9 12.4a1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1-1.5 1.5 1.5 1.5 0 0 1-1.5-1.5 1.5 1.5 0 0 1 .379-.998L2.275 20.4a.937.937 0 1 0 1.327 1.325l2.232-2.229a44 44 0 0 0 4.92-.287c2.089-.213 3.791-1.033 5.18-2.207h-3.946l5.735-1.91a15.5 15.5 0 0 0 1.189-1.84h-3.17l4.162-2.078C21.543 7.191 21.929 3.025 22 2"></path>
</svg>
;
};

function PhpCsFixerIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={PhpCsFixerSvg} {...props} />
};

export default PhpCsFixerIcon;
