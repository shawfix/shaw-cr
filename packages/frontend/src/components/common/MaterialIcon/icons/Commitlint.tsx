import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function CommitlintSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #009688)" d="M2.47 2.922V8.37h1.813V2.922zm12.708 1.816a7.27 7.27 0 0 0-6.946 5.127L6.1 12l2.133 2.133c.916 2.969 3.677 5.13 6.945 5.13 4.013 0 7.262-3.25 7.262-7.263s-3.25-7.262-7.262-7.262m2.942 3.703 1.342 1.63-5.49 5.488-3.179-3.467 1.34-1.34 1.838 1.838zM3.377 10.184c-.998 0-1.816.817-1.816 1.816a1.817 1.817 0 1 0 1.816-1.816M2.47 15.63v5.448h1.814V15.63z"></path>
</svg>
;
};

function CommitlintIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={CommitlintSvg} {...props} />
};

export default CommitlintIcon;
