import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function AutoLightSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ffc400)" d="M8.48 4.17c.334.574 1.047.798 1.696.636A7.5 7.5 0 0 1 12 4.583c.62 0 1.223.075 1.799.217.647.159 1.357-.065 1.691-.64.39-.668.116-1.532-.63-1.751A10.1 10.1 0 0 0 12 2c-1.006 0-1.977.146-2.894.419-.743.22-1.015 1.083-.627 1.75Z"></path>
  <path fill="var(--material-icon-color, #ad1457)" d="M5.039 4.772c.564-.535 1.458-.34 1.848.331.333.572.176 1.292-.284 1.769a7.4 7.4 0 0 0-1.456 2.17c-.242.552-.762.958-1.367.958-.854 0-1.496-.781-1.191-1.572a10 10 0 0 1 2.45-3.656"></path>
  <path fill="var(--material-icon-color, #546e7a)" d="M3.197 12c.718 0 1.32.583 1.444 1.286.613 3.483 3.675 6.13 7.359 6.13s6.746-2.647 7.359-6.13c.124-.703.726-1.286 1.444-1.286.719 0 1.279.581 1.187 1.289C21.353 18.203 17.123 22 12 22s-9.353-3.797-9.99-8.711C1.918 12.58 2.478 12 3.197 12"></path>
  <path fill="var(--material-icon-color, #ff5252)" d="M20.203 9.958c.857 0 1.5-.786 1.19-1.578a10 10 0 0 0-2.458-3.632c-.564-.533-1.455-.336-1.845.333-.333.573-.174 1.295.289 1.772a7.4 7.4 0 0 1 1.459 2.155c.243.548.762.95 1.365.95"></path>
  <path fill="var(--material-icon-color, #546e7a)" d="M7.133 9.32c-.442-.488.053-1.262.657-1.027l4.912 1.91c1.114.434 1.538 1.84.862 2.855a1.785 1.785 0 0 1-2.83.222l-3.6-3.96Z"></path>
</svg>
;
};

function AutoLightIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={AutoLightSvg} {...props} />
};

export default AutoLightIcon;
