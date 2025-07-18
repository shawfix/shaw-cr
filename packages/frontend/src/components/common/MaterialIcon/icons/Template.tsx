import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function TemplateSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #90a4ae)" d="M13 9h1v2h-3V7h2zm5.5 0-2.12-2.12 1.25-1.25L20 8v2h-2v1h-3V9zM13 3.5V2h-1v2h1v2h-2V4H9V2H8v2H6v1H4V4c0-1.11.89-2 2-2h8l2.36 2.36-1.25 1.25zM20 20a2 2 0 0 1-2 2h-2v-2h2v-1h2zm-2-5h2v3h-2zm-6 7v-2h3v2zm-4 0v-2h3v2zm-2 0a2 2 0 0 1-2-2v-2h2v2h1v2zm-2-8h2v3H4zm0-4h2v3H4zm14 1h2v3h-2zM4 6h2v3H4z"></path>
</svg>
;
};

function TemplateIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={TemplateSvg} {...props} />
};

export default TemplateIcon;
