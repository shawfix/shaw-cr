import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function GitpodSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ffa726)" d="M18.258 4.156a2.6 2.6 0 0 1-.951 3.538l-.016.01-7.757 4.428a.66.66 0 0 0-.331.57v6.953a.66.66 0 0 0 .331.57l6.14 3.507a.66.66 0 0 0 .652 0l6.14-3.506a.66.66 0 0 0 .331-.571v-4.323l-5.52 3.11a2.6 2.6 0 0 1-2.57-4.518l.014-.009 7.898-4.452A3.61 3.61 0 0 1 28 12.603v7.58a4.95 4.95 0 0 1-2.495 4.295l-7.048 4.024a4.95 4.95 0 0 1-4.914 0l-7.048-4.024A4.95 4.95 0 0 1 4 20.182v-8.007A4.95 4.95 0 0 1 6.495 7.88l8.214-4.692a2.603 2.603 0 0 1 3.55.968Z"></path>
</svg>
;
};

function GitpodIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={GitpodSvg} {...props} />
};

export default GitpodIcon;
