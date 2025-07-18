import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function CoconutSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #8d6e63)" d="M8.042 3.036a7 7 0 0 0-.737.237c-.527.22-.983.492-1.385.824a3 3 0 0 1-.275.21c-.126.056-.7.655-1.007 1.052-1.732 2.247-2.442 5.513-1.86 8.565.076.396.339 1.362.465 1.706.764 2.085 2.136 3.719 3.928 4.673 1.412.753 3.084 1.06 4.822.887.348-.034.524-.063 1.085-.165.233-.043 1.381-.385 1.659-.495 2.392-.946 4.365-2.582 5.572-4.618.506-.855.796-1.669 1.029-2.882.37-1.923-.502-4.262-2.324-6.229-2.643-2.854-6.788-4.459-10.18-3.942a8 8 0 0 0-.793.177zm.42 1.507c.28-.076.575-.139.813-.167a8 8 0 0 1 1.994.024c3.131.42 6.308 2.488 7.806 5.077.498.861.788 1.79.803 2.578.012.635-.129 1.18-.431 1.679a2.6 2.6 0 0 1-.549.647c-.613.538-1.455.876-2.501 1.005-.548.067-.92.206-1.23.46-.068.056-.642.588-1.279 1.182-1.248 1.166-1.237 1.157-1.42 1.104a.4.4 0 0 1-.15-.087c-.13-.122-.126-.16.079-1.224.105-.543.188-1.053.187-1.132a1.16 1.16 0 0 0-.297-.75c-.113-.125-.3-.244-.547-.35-2.359-1.007-4.343-2.776-5.295-4.722a5.2 5.2 0 0 1-.412-1.088c-.29-1.061-.22-1.913.219-2.683.322-.565.777-.964 1.487-1.302.178-.084.443-.175.723-.251"></path>
</svg>
;
};

function CoconutIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={CoconutSvg} {...props} />
};

export default CoconutIcon;
