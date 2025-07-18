import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ScrewdriverSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #0288d1)" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 8.185 9.815A10 10 0 0 0 20 30a10 10 0 0 0 10-10 10 10 0 0 0-8.17-9.83A10 10 0 0 0 12 2m0 4a6 6 0 0 1 5.654 4H10v7.652A6 6 0 0 1 6 12a6 6 0 0 1 6-6m2 8h4v4h-4zm8 .346A6 6 0 0 1 26 20a6 6 0 0 1-6 6 6 6 0 0 1-5.652-4H22z"></path>
</svg>
;
};

function ScrewdriverIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ScrewdriverSvg} {...props} />
};

export default ScrewdriverIcon;
