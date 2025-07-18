import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function PlaywrightSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ef5350)" d="M9.708 15.968v-1.429l-3.97 1.125s.294-1.703 2.364-2.291a3.45 3.45 0 0 1 1.605-.091v-5.86h1.988a12 12 0 0 0-.601-1.541c-.291-.591-.589-.2-1.266.367-.477.398-1.682 1.248-3.495 1.737s-3.278.359-3.89.253c-.867-.15-1.321-.341-1.278.32.037.58.175 1.483.492 2.673.688 2.58 2.957 7.55 7.245 6.395 1.12-.302 1.91-.898 2.459-1.66H9.708zm-6.404-4.701 3.047-.803s-.09 1.173-1.232 1.474-1.816-.671-1.816-.671z"></path>
  <path fill="var(--material-icon-color, #4caf50)" d="M21.178 7.49c-.792.14-2.694.312-5.042-.318-2.35-.63-3.908-1.729-4.526-2.246-.876-.733-1.26-1.244-1.64-.473-.335.68-.763 1.786-1.178 3.337-.898 3.354-1.57 10.432 3.985 11.921s8.512-4.978 9.41-8.333c.416-1.548.597-2.72.647-3.477.058-.857-.53-.608-1.656-.41zm-11.162 2.776s.875-1.363 2.36-.94c1.486.422 1.6 2.065 1.6 2.065zm3.624 6.11c-2.611-.765-3.014-2.848-3.014-2.848l7.016 1.962s-1.416 1.64-4.002.886m2.482-4.28s.874-1.362 2.358-.938 1.602 2.065 1.602 2.065z"></path>
</svg>
;
};

function PlaywrightIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={PlaywrightSvg} {...props} />
};

export default PlaywrightIcon;
