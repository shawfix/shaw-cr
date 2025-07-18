import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderAzurePipelinesSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #1e88e5)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #bbdefb)" d="m28 22 3.724-1.862a.5.5 0 0 0 .276-.447V12.5a.5.5 0 0 0-.5-.5h-7.191a.5.5 0 0 0-.447.276L22 16h-5.5a.5.5 0 0 0-.5.5V20l1.172 1.172 1.414-1.415L20 21.172l-1.414 1.414 2.828 2.828L22.828 24l1.415 1.414-1.415 1.414L24 28h3.5a.5.5 0 0 0 .5-.5Zm0-4a2 2 0 1 1 2-2 2 2 0 0 1-2 2M16 28v-4h-2v6h6v-2z"></path>
</svg>
;
};

function FolderAzurePipelinesIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderAzurePipelinesSvg} {...props} />
};

export default FolderAzurePipelinesIcon;
