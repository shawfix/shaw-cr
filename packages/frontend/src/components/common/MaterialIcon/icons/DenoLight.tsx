import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function DenoLightSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #455a64)" d="M3.07 10.688C4.02-1.34 24.46-.735 25.713 11.893c1.027 3.74 2.21 8.244 3.222 11.998A18.98 18.98 0 0 1 17.339 30c-.407-2.79-.839-5.602-1.41-8.364a27 27 0 0 0-.505-2.123c-.103-.536-.522-1.043-.173-1.56-6.665.529-12.374-2.428-12.18-7.267Zm14.347-4.101c-1.808-1.861-4.69 1.02-2.828 2.828 1.808 1.86 4.69-1.021 2.828-2.828"></path>
</svg>
;
};

function DenoLightIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={DenoLightSvg} {...props} />
};

export default DenoLightIcon;
