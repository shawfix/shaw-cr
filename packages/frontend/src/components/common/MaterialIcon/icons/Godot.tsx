import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function GodotSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #42a5f5)" d="m26 22-1 4h-6l-1-4h-4l-1 4H7l-1-4-4-1v3a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4v-3Z"></path>
  <path fill="var(--material-icon-color, #42a5f5)" d="m31.75 10.745-2.5-4.33a.5.5 0 0 0-.683-.183l-2.793 1.612A10 10 0 0 0 24 6.838V2.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V6h-4V2.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v4.338a10 10 0 0 0-1.725.97l-2.73-1.576a.5.5 0 0 0-.683.183l-2.5 4.33a.5.5 0 0 0 .183.683L2.6 12.614A10 10 0 0 0 2 16v3l5 1 1 4h4l1-4h6l1 4h4l1-4 5-1v-3a10 10 0 0 0-.58-3.332l2.147-1.24a.5.5 0 0 0 .183-.683M9 18a3 3 0 1 1 3-3 3 3 0 0 1-3 3m9-2h-4v-2h4Zm5 2a3 3 0 1 1 3-3 3 3 0 0 1-3 3"></path>
</svg>
;
};

function GodotIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={GodotSvg} {...props} />
};

export default GodotIcon;
