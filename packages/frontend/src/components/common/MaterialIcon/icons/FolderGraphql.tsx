import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderGraphqlSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ec407a)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #f8bbd0)" d="M22.995 10A1.99 1.99 0 0 0 21 11.984a2 2 0 0 0 .036.37l-3.734 2.14a2 2 0 0 0-.308-.221h-.003a2.01 2.01 0 0 0-2.72.761 1.948 1.948 0 0 0 1.07 2.825v4.277a1.975 1.975 0 0 0-1.228 2.52 2.007 2.007 0 0 0 2.884 1.063 2 2 0 0 0 .303-.218l3.736 2.135a1.998 1.998 0 1 0 3.96.376 2 2 0 0 0-.05-.431l3.7-2.12a2.015 2.015 0 0 0 2.828-.128 2 2 0 0 0 .251-.34h.003v-.002a1.97 1.97 0 0 0-.73-2.704l-.002-.001a2 2 0 0 0-.341-.15v-4.28a1.974 1.974 0 0 0 1.236-2.516 2.006 2.006 0 0 0-2.886-1.067H29a2 2 0 0 0-.31.22l-3.732-2.132a1.985 1.985 0 0 0-1.586-2.324 2 2 0 0 0-.376-.036Zm-1.802 3.78-4.534 7.777v-3.713a1.934 1.934 0 0 0 1.288-2.208Zm3.616.005 3.234 1.854a1.94 1.94 0 0 0 1.292 2.205v3.707Zm-2.178.14a1.9 1.9 0 0 0 .734 0l5.12 8.787a1.85 1.85 0 0 0-.374.639H17.882a2 2 0 0 0-.153-.337l-.002-.003a2 2 0 0 0-.217-.296ZM18.472 24.66h9.144l-3.293 1.883a1.974 1.974 0 0 0-2.618-.03l-3.233-1.85Z"></path>
</svg>
;
};

function FolderGraphqlIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderGraphqlSvg} {...props} />
};

export default FolderGraphqlIcon;
