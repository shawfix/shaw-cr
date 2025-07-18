import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderRulesSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ef5350)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #ffcdd2)" d="M30 14h-2a3 3 0 0 0-6 0h-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2m-5-1a1 1 0 1 1-1 1 1.003 1.003 0 0 1 1-1m-1.547 11.597-3.093-3.093 1.09-1.09 2.003 1.995 5.096-5.096 1.091 1.099Z"></path>
</svg>
;
};

function FolderRulesIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderRulesSvg} {...props} />
};

export default FolderRulesIcon;
