import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function EmailSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #42a5f5)" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m0 6-12 6-12-6V8l12 6 12-6Z"></path>
</svg>
;
};

function EmailIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={EmailSvg} {...props} />
};

export default EmailIcon;
