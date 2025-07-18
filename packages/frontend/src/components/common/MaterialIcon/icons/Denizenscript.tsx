import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function DenizenscriptSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ffd54f)" d="M6 4h8.804a17 17 0 0 1 4.54.459 8 8 0 0 1 3.597 2.21 10.5 10.5 0 0 1 2.278 3.887A17.8 17.8 0 0 1 26 16.23a15.8 15.8 0 0 1-.733 5.108 10.6 10.6 0 0 1-2.554 4.24 8.45 8.45 0 0 1-3.385 1.915 14.5 14.5 0 0 1-4.264.508H6Zm4 4.06v15.896h4.413a13 13 0 0 0 2.913-.228 4.45 4.45 0 0 0 1.945-1 5.1 5.1 0 0 0 1.261-2.316 15.8 15.8 0 0 0 .488-4.395 14.5 14.5 0 0 0-.488-4.274 5.5 5.5 0 0 0-1.367-2.324 4.57 4.57 0 0 0-2.23-1.13 21.7 21.7 0 0 0-3.954-.229Z" style="isolation:isolate"></path>
</svg>
;
};

function DenizenscriptIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={DenizenscriptSvg} {...props} />
};

export default DenizenscriptIcon;
