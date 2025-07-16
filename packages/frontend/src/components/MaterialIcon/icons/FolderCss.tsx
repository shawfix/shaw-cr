import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderCssSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" width="1em" height="1em">
  <defs>
    <path id="a" fill="#d1c4e9" d="M14 20v-2h-2v8h2v-2h2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm10 0v-2a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2c0 .839.357 2.34 2.746 2.966C21.438 23.15 22 23.612 22 24v2h-2v-2h-2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a3.345 3.345 0 0 0-2.746-2.967C20 20.703 20 20.193 20 20v-2h2v2Zm8 0v-2a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2c0 .839.357 2.34 2.746 2.966C29.438 23.15 30 23.612 30 24v2h-2v-2h-2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a3.345 3.345 0 0 0-2.746-2.967C28 20.703 28 20.193 28 20v-2h2v2Z"></path>
  </defs>
  <path fill="var(--material-icon-color, #7e57c2)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <use xlink:href="#a"></use>
  <use xlink:href="#a"></use>
</svg>
;
};

function FolderCssIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderCssSvg} {...props} />
};

export default FolderCssIcon;
