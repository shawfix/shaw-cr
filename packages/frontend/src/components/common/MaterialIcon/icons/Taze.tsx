import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function TazeSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #00C853)" d="M9.196 10.555a.465.465 0 0 0-.654-.14l-2.417 1.62 1.038-2.108a.5.5 0 0 0-.195-.657.47.47 0 0 0-.643.209l-1.049 2.123-.165-2.95a.477.477 0 0 0-.497-.454.48.48 0 0 0-.444.508l.093 1.665c.039.698-.103 1.4-.41 2.023l-.473.962a.66.66 0 0 0 .283.877l1.355.698c.312.16.697.035.858-.29l.473-.961a3.9 3.9 0 0 1 1.345-1.54l1.365-.917a.484.484 0 0 0 .137-.668"></path>
  <path fill="var(--material-icon-color, #00695C)" d="M12.9 6.175c.454-1.85-.385-3.832-2.12-4.73-1.735-.892-3.792-.398-4.977 1.072a3.066 3.066 0 0 0-3.47 1.654c-.77 1.56-.157 3.459 1.37 4.246a3.05 3.05 0 0 0 1.666.324 1.96 1.96 0 0 0 1.048 1.575 1.88 1.88 0 0 0 1.857-.075c.288.489.712.902 1.248 1.176 1.526.788 3.383.16 4.153-1.4a3.234 3.234 0 0 0-.775-3.842"></path>
</svg>
;
};

function TazeIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={TazeSvg} {...props} />
};

export default TazeIcon;
