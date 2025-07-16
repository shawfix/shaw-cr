import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function KivySvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #90a4ae)" d="M1.123 4.881v8.456l3.643-3.643a.825.825 0 0 0 0-1.17zm4.45 14.066v-8.456L1.93 14.134a.825.825 0 0 0 0 1.17zM22.952 8.25 12.848 9.316l-.033.034 4.518 4.518zM6.595 4.64s.044 6.245-.006 8.414c-.037 1.619.703 2.106 1.41 2.848 1.018 1.067 3.022 2.968 3.022 2.968.396.39 1.025.393 1.418 0l3.485-3.485a1 1 0 0 0 0-1.417z"></path>
</svg>
;
};

function KivyIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={KivySvg} {...props} />
};

export default KivyIcon;
