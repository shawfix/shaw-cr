import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function GithubSponsorsSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="var(--material-icon-color, #f06292)" viewBox="0 0 16 16" width="1em" height="1em">
  <path d="M7.984 14q-.217 0-.409-.077a1.3 1.3 0 0 1-.369-.236l-.73-.671Q4.24 11.012 2.62 9.18 1 7.35 1 5.43q0-1.453.994-2.441.995-.99 2.445-.989.85 0 1.784.436C6.845 2.727 7.438 3.142 8 4c.59-.858 1.189-1.273 1.798-1.564Q10.711 2 11.561 2q1.45 0 2.445.989.994.988.994 2.44 0 1.967-1.7 3.823A59 59 0 0 1 9.526 13l-.747.687a1.15 1.15 0 0 1-.794.313z"></path>
</svg>
;
};

function GithubSponsorsIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={GithubSponsorsSvg} {...props} />
};

export default GithubSponsorsIcon;
