import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderIntellijOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" width="1em" height="1em">
  <defs data-mit-no-recolor>
    <linearGradient id="a" x1=".445" x2="104.977" y1="3272.835" y2="3209.742" gradientTransform="translate(18.126 -331.024)scale(.11021)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fdd835"></stop>
      <stop offset="1" stop-color="#f57c00"></stop>
    </linearGradient>
    <linearGradient id="b" x1="22.55" x2="117.962" y1="3121.343" y2="3204.873" gradientTransform="translate(18.126 -331.024)scale(.11021)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ef5350"></stop>
      <stop offset=".57" stop-color="#ff6e40"></stop>
      <stop offset="1" stop-color="#f57c00"></stop>
    </linearGradient>
    <linearGradient id="c" x1="28.608" x2="-27.937" y1="3197.064" y2="3161.75" gradientTransform="translate(18.126 -331.024)scale(.11021)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#8e24aa"></stop>
      <stop offset=".385" stop-color="#ab47bc"></stop>
      <stop offset=".765" stop-color="#ec407a"></stop>
      <stop offset=".957" stop-color="#ec407a"></stop>
    </linearGradient>
    <linearGradient id="d" x1="27.588" x2="-27.616" y1="3117.085" y2="3162.678" gradientTransform="translate(18.126 -331.024)scale(.11021)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ef5350"></stop>
      <stop offset=".364" stop-color="#ec407a"></stop>
      <stop offset="1" stop-color="#ec407a"></stop>
    </linearGradient>
  </defs>
  <path fill="var(--material-icon-color, #546e7a)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, url(#a))" d="M30.93 22.519a.68.68 0 0 0 .22-.47.69.69 0 0 0-.647-.72.72.72 0 0 0-.485.161l-12.314 6.745a1.44 1.44 0 0 0-.69.602 1.48 1.48 0 0 0 .506 2.03l.022.013a1.51 1.51 0 0 0 1.573-.03c.03-.029.073-.043.103-.073l11.461-8.053a2 2 0 0 0 .25-.205Z"></path>
  <path fill="var(--material-icon-color, url(#b))" d="m30.959 21.534-9.376-9.199a1.133 1.133 0 1 0-1.66 1.543 2 2 0 0 0 .176.147l9.904 8.48a.76.76 0 0 0 .441.19.69.69 0 0 0 .72-.646.73.73 0 0 0-.205-.515"></path>
  <path fill="var(--material-icon-color, url(#c))" d="M21.892 20.711c-.015 0-5.79-4.555-5.907-4.628l-.265-.133a1.644 1.644 0 0 0-1.44 2.94 1.3 1.3 0 0 0 .294.131c.059.03 6.671 2.763 6.671 2.763a.63.63 0 0 0 .647-1.073"></path>
  <path fill="var(--material-icon-color, url(#d))" d="M20.746 11.968a1.2 1.2 0 0 0-.676.22l-5.849 3.939c-.014.014-.03.014-.03.029h-.014a1.638 1.638 0 0 0 .397 2.865 1.61 1.61 0 0 0 1.528-.205 1.4 1.4 0 0 0 .265-.235l5.084-4.585a1.132 1.132 0 0 0-.705-2.028"></path>
</svg>
;
};

function FolderIntellijOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderIntellijOpenSvg} {...props} />
};

export default FolderIntellijOpenIcon;
