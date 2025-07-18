import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function PdmSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #9575cd)" d="m16.145 6.113 2.757 1.59a.54.54 0 0 1 .27.469v7.656a.54.54 0 0 1-.27.469l-1.675.965-.239-.137-.843-.488ZM5.973 13.25l9.101 5.254-2.804 1.621a.53.53 0 0 1-.54 0l-6.632-3.828a.54.54 0 0 1-.27-.469v-1.914l.067-.039Zm2.156-1.242 5.863-3.387v6.774Zm5.863-5.871-9.164 5.289V8.172a.54.54 0 0 1 .27-.469l6.632-3.828a.53.53 0 0 1 .54 0l1.722.996Zm-3.34-4.125a2.68 2.68 0 0 1 2.696 0L19.98 5.84a2.69 2.69 0 0 1 1.344 2.332v7.656c0 .961-.512 1.852-1.344 2.332l-6.632 3.828a2.68 2.68 0 0 1-2.696 0L4.02 18.16a2.69 2.69 0 0 1-1.344-2.332V8.172c0-.965.511-1.852 1.344-2.332Zm0 0"></path>
</svg>
;
};

function PdmIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={PdmSvg} {...props} />
};

export default PdmIcon;
