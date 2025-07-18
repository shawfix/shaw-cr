import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function DependenciesUpdateSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="var(--material-icon-color, none)" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #8bc34a)" d="m10.484 3.635-2.5 2.546-.875-.891 1-1.018H8q-1.563 0-2.656 1.121Q4.249 6.515 4.25 8.122a3.5 3.5 0 0 0 .375 1.59l-.937.955a5.156 5.25 0 0 1-.516-1.24A4.81 4.897 0 0 1 3 8.121Q3 5.99 4.453 4.494T8 2.999h.11l-1-1.018.874-.891zm-4.968 8.747 2.5-2.546.875.891-1 1.018H8q1.563 0 2.656-1.12 1.095-1.123 1.094-2.73a3.5 3.5 0 0 0-.375-1.59l.938-.955q.343.604.515 1.24.172.638.172 1.305 0 2.131-1.453 3.628Q10.094 13.018 8 13.018h-.11l1 1.018-.874.891z"></path>
</svg>
;
};

function DependenciesUpdateIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={DependenciesUpdateSvg} {...props} />
};

export default DependenciesUpdateIcon;
