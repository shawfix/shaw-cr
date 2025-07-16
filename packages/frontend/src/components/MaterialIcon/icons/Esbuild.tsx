import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function EsbuildSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ffca28)" d="M12 2.042A9.957 9.957 0 0 0 2.043 12 9.957 9.957 0 0 0 12 21.957 9.957 9.957 0 0 0 21.957 12 9.957 9.957 0 0 0 12 2.043zM7.617 6.425 13.192 12l-5.575 5.575-1.69-1.69L9.814 12 5.926 8.115zm5.975 0L19.166 12l-5.574 5.575-1.69-1.69L15.787 12l-3.885-3.885z"></path>
</svg>
;
};

function EsbuildIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={EsbuildSvg} {...props} />
};

export default EsbuildIcon;
