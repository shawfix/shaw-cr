import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderLefthookOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #607d8b)" d="M28.97 11.998H9.444a2 2 0 0 0-1.898 1.368L4.001 24V9.998h24.003a2 2 0 0 0-2-2H15.125a2 2 0 0 1-1.28-.464L12.557 6.46a2 2 0 0 0-1.28-.464H4.002a2 2 0 0 0-2.001 2V24A2 2 0 0 0 4 26h22.003l4.806-11.214a2 2 0 0 0-1.838-2.788z"></path>
  <path fill="var(--material-icon-color, #f44336)" d="M14 20v6h-4zm4.026-5.342-2.385.795a1.494 1.494 0 0 0-.867 2.094l.534 1.068 4.696-1.624c.014-.293-.004-.602-.004-.91a1.496 1.496 0 0 0-1.974-1.423m12.886 5.502-5.546-5.18C24.272 13.999 23.85 14 22 14v3.012a3.36 3.36 0 0 1-1.301 2.787L24 24l5.876 1.676c.606-.698.85-1.005 1.38-1.595a2.583 2.583 0 0 0-.344-3.921"></path>
  <path fill="var(--material-icon-color, #b71c1c)" d="m10 26 4-2 4 2-4 2zm10.699-6.2a20 20 0 0 1-2.463 1.314 3.5 3.5 0 0 1-2.236.302v1.339l8.98 4.888a3.22 3.22 0 0 0 4.054-1c.333-.384.505-.582.842-.967zm-5.127-1.89 3.756-1.408a.5.5 0 0 1 .675.492 1.48 1.48 0 0 1-.832 1.42l-1.83.915c-1.399.7-2.717-1.063-1.769-1.419"></path>
</svg>
;
};

function FolderLefthookOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderLefthookOpenSvg} {...props} />
};

export default FolderLefthookOpenIcon;
