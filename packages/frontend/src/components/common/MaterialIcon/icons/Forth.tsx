import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ForthSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.733 67.733" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ef5350)" d="M10.321 12.006c-.21 0-.38.173-.38.39v12.63c0 .215.17.389.38.389h16.925c.21 0 .38-.174.38-.39v-12.63a.384.384 0 0 0-.38-.389zm30.167 0c-.21 0-.38.173-.38.39v12.63c0 .215.17.389.38.389h16.925c.21 0 .38-.174.38-.39v-12.63a.384.384 0 0 0-.38-.389zM10.321 34.328c-.21 0-.38.173-.38.39v12.63c0 .215.17.389.38.389h16.925c.21 0 .38-.174.38-.39v-12.63a.384.384 0 0 0-.38-.389zm30.167 0c-.21 0-.38.173-.38.39v12.63c0 .215.17.389.38.389h4.053v4.351H40.51a.374.374 0 0 0-.375.375v2.89c0 .207.167.374.375.374h8.303a.373.373 0 0 0 .374-.374v-4.135h3.798a.374.374 0 0 0 .374-.375v-3.106h4.054c.21 0 .38-.174.38-.39v-12.63a.384.384 0 0 0-.38-.389z"></path>
</svg>
;
};

function ForthIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ForthSvg} {...props} />
};

export default ForthIcon;
