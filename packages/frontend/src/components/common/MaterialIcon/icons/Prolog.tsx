import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function PrologSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ef5350)" d="M12 15.385a5.1 5.1 0 0 0 1.862 1.693L12 18.94l-1.862-1.862A5.04 5.04 0 0 0 12 15.385m4.232-4.063a1.693 1.693 0 0 0-1.693 1.693 1.693 1.693 0 0 0 1.693 1.693 1.693 1.693 0 0 0 1.693-1.693c0-.94-.762-1.693-1.693-1.693m-8.464 0a1.693 1.693 0 0 0-1.693 1.693 1.693 1.693 0 0 0 1.693 1.693 1.693 1.693 0 0 0 1.693-1.693c0-.94-.762-1.693-1.693-1.693m8.464-2.116a3.385 3.385 0 0 1 3.385 3.386 3.385 3.385 0 0 1-3.385 3.385 3.385 3.385 0 0 1-3.386-3.385 3.385 3.385 0 0 1 3.386-3.386m-8.464 0a3.385 3.385 0 0 1 3.386 3.386 3.385 3.385 0 0 1-3.386 3.385 3.385 3.385 0 0 1-3.385-3.385 3.385 3.385 0 0 1 3.385-3.386M3.74 2.69c1.49 3.132.415 5.468-.584 7.787a5.1 5.1 0 0 0-.465 2.116 5.08 5.08 0 0 0 5.078 5.078 6 6 0 0 0 .533-.042l2.506 2.505L12 21.31l1.194-1.177 2.505-2.505c.178.025.355.034.533.042a5.08 5.08 0 0 0 5.078-5.078 5.1 5.1 0 0 0-.465-2.116c-.999-2.319-2.074-4.655-.584-7.787-2.235 1.744-5.417 3.123-8.26 3.132-2.845-.008-6.027-1.388-8.261-3.132z"></path>
</svg>
;
};

function PrologIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={PrologSvg} {...props} />
};

export default PrologIcon;
