import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function NodemonSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #8bc34a)" d="m27.354 8.517-10.708-6.34A1.27 1.27 0 0 0 15.999 2a1.27 1.27 0 0 0-.647.178L4.647 8.516A1.33 1.33 0 0 0 4 9.664v12.678a1.33 1.33 0 0 0 .647 1.147l10.705 6.333a1.26 1.26 0 0 0 1.293 0l10.708-6.333A1.33 1.33 0 0 0 28 22.341V9.664a1.33 1.33 0 0 0-.646-1.147M24 23.307a.5.5 0 0 1-.658.474l-5-1.667A.5.5 0 0 1 18 21.64V15.6a.5.5 0 0 0-.223-.415l-1.5-1a.5.5 0 0 0-.554 0l-1.5 1A.5.5 0 0 0 14 15.6v6.039a.5.5 0 0 1-.342.474l-5 1.667A.5.5 0 0 1 8 23.306V12.31a.5.5 0 0 1 .276-.447l1.942-.971A2 2 0 0 1 10 10V6l3.333 3.333 2.443-1.221a.5.5 0 0 1 .448 0l2.443 1.221L22 6v4a2 2 0 0 1-.218.89l1.942.972a.5.5 0 0 1 .276.447Z"></path>
</svg>
;
};

function NodemonIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={NodemonSvg} {...props} />
};

export default NodemonIcon;
