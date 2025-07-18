import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderBenchmarkOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #1e88e5)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #bbdefb)" d="M20 12a9.99 9.99 0 0 0-7.99 16h2.71A7.993 7.993 0 0 1 20 14a8 8 0 0 1 1.69.18c.73-.44 1.51-.9 2.28-1.35A9.8 9.8 0 0 0 20 12m9.12 5.92c-.41.73-.86 1.52-1.32 2.33A7.8 7.8 0 0 1 28 22a7.97 7.97 0 0 1-2.72 6h2.71A9.93 9.93 0 0 0 30 22a9.8 9.8 0 0 0-.88-4.08"></path>
  <path fill="var(--material-icon-color, #bbdefb)" d="M17.172 19.172c1.562-1.563 11.313-5.657 11.313-5.657s-4.094 9.751-5.657 11.313a4 4 0 0 1-5.656-5.656"></path>
</svg>
;
};

function FolderBenchmarkOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderBenchmarkOpenSvg} {...props} />
};

export default FolderBenchmarkOpenIcon;
