import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function BenchJsxSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #00bcd4)" d="M6.915 9.906q.42.413 1.084.404t.98-.472l3.92-5.775-5.88 3.85q-.472.309-.498.945t.394 1.048M7.999 2q1.033 0 1.987.284.953.283 1.793.85l-1.33.825q-.577-.292-1.198-.438-.622-.146-1.252-.146-2.327 0-3.963 1.607T2.4 8.875q0 .722.201 1.427.201.704.569 1.323h9.659q.402-.653.586-1.358t.184-1.46q0-.62-.149-1.204t-.446-1.134l.84-1.307q.525.808.831 1.72.306.91.324 1.89.017.98-.228 1.873-.245.894-.717 1.702-.193.31-.525.481-.333.172-.7.172h-9.66q-.367 0-.7-.172t-.524-.481q-.455-.774-.7-1.642T1 8.875q0-1.427.551-2.673T3.056 4.02q.954-.937 2.231-1.479Q6.565 2 8 2zm.123 5.38"></path>
</svg>
;
};

function BenchJsxIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={BenchJsxSvg} {...props} />
};

export default BenchJsxIcon;
