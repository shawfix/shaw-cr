import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function SalesforceSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #039be5)" d="M18.206 6.522c-.681 0-1.275.204-1.858.399-.681-1.177-1.956-1.956-3.328-1.956-1.07 0-2.043.487-2.734 1.168-.779-.973-1.956-1.664-3.318-1.664-2.267 0-4.213 1.858-4.213 4.126 0 .574.204 1.157.399 1.741a3.58 3.58 0 0 0-1.859 3.124c0 1.946 1.567 3.62 3.523 3.62.292 0 .583 0 .778-.098.39 1.469 1.858 2.55 3.62 2.55 1.654 0 3.026-.984 3.512-2.356.496.205.983.4 1.47.4 1.274 0 2.442-.71 3.025-1.762.302.078.613.078.886.078 2.54 0 4.592-2.034 4.592-4.67.098-2.627-1.946-4.7-4.495-4.7"></path>
</svg>
;
};

function SalesforceIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={SalesforceSvg} {...props} />
};

export default SalesforceIcon;
