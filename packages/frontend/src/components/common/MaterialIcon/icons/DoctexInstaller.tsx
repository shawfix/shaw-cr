import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function DoctexInstallerSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #f57f17)" d="M1.25 3 1 5h.5c.25-1.25.25-1.5.988-1.5h.262a.25.25 0 0 1 .25.25v5.5c0 .138 0 .25-.5.25H2v.5h3v-.5h-.5c-.5 0-.5-.112-.5-.25v-5.5a.25.25 0 0 1 .25-.25h.25c.75 0 .75.25 1 1.5H6l-.25-2zM6 12v2h9v-2h-.5v.5c0 .5-.112.5-.25.5h-7.5c-.138 0-.25 0-.25-.5V12zm4-10v8c-.5-.75-2-1.75-2.75-2L7 8.5c1.5.5 2.75 2 3.5 3.5.75-1.5 2-3 3.5-3.5l-.25-.5C13 8.25 11.5 9.25 11 10V2z"></path>
</svg>
;
};

function DoctexInstallerIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={DoctexInstallerSvg} {...props} />
};

export default DoctexInstallerIcon;
