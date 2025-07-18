import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderReduxReducerSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ef5350)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #ffcdd2)" stroke="#ffcdd2" stroke-linejoin="round" stroke-width=".293" d="M25.948 24.114a1.65 1.65 0 0 0 .97-.6 1.8 1.8 0 0 0 .381-1.274 1.72 1.72 0 0 0-1.69-1.596h-.06a1.724 1.724 0 0 0-1.61 1.814 1.85 1.85 0 0 0 .34.985 8.85 8.85 0 0 1-3.863 3.799 6.15 6.15 0 0 1-3.876.771 3.13 3.13 0 0 1-2.32-1.411 3.67 3.67 0 0 1-.18-3.738 5.8 5.8 0 0 1 1.605-1.986.3.3 0 0 0 .098-.313 14 14 0 0 1-.315-1.298.29.29 0 0 0-.172-.213.28.28 0 0 0-.272.036c-3.731 2.836-3.326 6.763-2.188 8.579a5.36 5.36 0 0 0 4.294 2.229q.125 0 .24-.005h.04a6 6 0 0 0 1.5-.188 9.88 9.88 0 0 0 7.078-5.591Z"></path>
  <path fill="var(--material-icon-color, #ffcdd2)" stroke="#ffcdd2" stroke-linejoin="round" stroke-width=".293" d="M30.327 20.428a10.12 10.12 0 0 0-7.774-3.69q-.133 0-.265.003h-.234a1.61 1.61 0 0 0-1.377-.78h-.053a1.62 1.62 0 0 0-1.175.535 1.806 1.806 0 0 0 .039 2.466 1.67 1.67 0 0 0 1.19.494h.064a1.68 1.68 0 0 0 1.375-.886h.27a8.83 8.83 0 0 1 5.126 1.646 6.6 6.6 0 0 1 2.522 3.202 3.48 3.48 0 0 1-.046 2.831 3.39 3.39 0 0 1-3.137 1.97 5.8 5.8 0 0 1-2.32-.522.27.27 0 0 0-.304.054 14 14 0 0 1-1.088.912.294.294 0 0 0 .039.495 7.7 7.7 0 0 0 3.313.84l.192.002a5.66 5.66 0 0 0 4.886-2.948 6.39 6.39 0 0 0-1.243-6.624Z"></path>
  <path fill="var(--material-icon-color, #ffcdd2)" stroke="#ffcdd2" stroke-linejoin="round" stroke-width=".293" d="m17.249 24.295.123-.01-.123.02a1.705 1.705 0 0 0 1.67 1.682h.053a1.715 1.715 0 0 0 1.64-1.778 1.78 1.78 0 0 0-.507-1.224 1.6 1.6 0 0 0-1.187-.493h-.076a9.6 9.6 0 0 1-1.154-5.448 6.83 6.83 0 0 1 1.39-3.853 3.97 3.97 0 0 1 2.842-1.363h.055c2.438 0 3.415 3.34 3.477 4.491a.29.29 0 0 0 .216.265c.299.073.822.246 1.213.384a.27.27 0 0 0 .266-.048.3.3 0 0 0 .105-.247C26.928 12.088 24.204 10 21.804 10a5.96 5.96 0 0 0-5.36 4.39 11.38 11.38 0 0 0 .936 9.155 1.5 1.5 0 0 0-.131.75Z"></path>
</svg>
;
};

function FolderReduxReducerIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderReduxReducerSvg} {...props} />
};

export default FolderReduxReducerIcon;
