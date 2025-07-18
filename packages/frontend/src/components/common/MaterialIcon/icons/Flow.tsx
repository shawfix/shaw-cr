import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FlowSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="1em" height="1em">
  <path fill="var(--material-icon-color, #fbc02d)" fill-opacity=".976" d="m38.75 33.427 77.461 77.47H54.436l61.145 61.16H38.437l93.462 93.478v-77.158l.01-.01v-77.47h-.01V66.982h46.691l20.394 20.393H153.57v76.531h22.05l24.474 24.473h-15.806l-.01-.01v.01h-31.665l-.01-.01v.01h-.313l.313.313v77.148h109.149l-39.2-39.2v-15.806l8.465 8.466v-77.37h-15.682l.017-38.191 30.09 30.086V56.362h-64.874l-22.94-22.934H113.71z"></path>
</svg>
;
};

function FlowIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FlowSvg} {...props} />
};

export default FlowIcon;
