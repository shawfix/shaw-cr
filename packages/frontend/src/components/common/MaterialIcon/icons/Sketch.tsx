import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function SketchSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ffc107)" d="M15.705 9.221h2.779l-4.632 6.484m-3.705-6.484h3.705L12 16.631m-6.484-7.41h2.779l1.852 6.484M14.78 4.59h1.852l1.853 2.779h-2.78m-4.63-2.779h1.852l.926 2.779h-3.705M7.368 4.59h1.853l-.926 2.78h-2.78m.927-4.631L2.737 8.294 12 21.263l9.262-12.968-3.705-5.557z"></path>
</svg>
;
};

function SketchIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={SketchSvg} {...props} />
};

export default SketchIcon;
