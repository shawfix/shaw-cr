import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function SasSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.35 6.35" width="1em" height="1em">
  <path fill="var(--material-icon-color, #039be5)" d="M3.16.546a1.9 1.9 0 0 0-.667.13c-.378.157-.678.4-.846.74-.255.452-.296 1.032.04 1.536.31.474.72.908 1.148 1.407.382.139.572-.272.515-.42-.276-.35-.57-.695-.804-1.06a1.1 1.1 0 0 1-.07-.906c.075-.198.503-.84 1.372-.836.345.04.658.059 1.086.53a1.6 1.6 0 0 0-.536-.753A2.05 2.05 0 0 0 3.159.546zm.245 1.4c-.277.002-.406.227-.348.437.253.365.578.748.869 1.122.316.609.092 1.077-.512 1.472-.82.458-1.576.116-2.026-.298.234.489.423.636.471.679.31.27.81.527 1.62.423.456-.102 1.06-.256 1.396-1.097.093-.265.125-.54.03-.843-.09-.338-.274-.58-.466-.829-.3-.351-.77-.979-.906-1.053a.6.6 0 0 0-.128-.013"></path>
</svg>
;
};

function SasIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={SasSvg} {...props} />
};

export default SasIcon;
