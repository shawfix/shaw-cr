import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function HjsonSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #78909c)" d="M11.652 3.92a1.1 1.1 0 0 0-.626-.014 1.11 1.11 0 0 0-.786 1.359 1.11 1.11 0 0 0 1.362.788 1.11 1.11 0 0 0 .786-1.363 1.11 1.11 0 0 0-.736-.771zm-3.6-.229a1 1 0 0 0-.246-.027h-.002a418 418 0 0 1-3.02-.096.84.84 0 0 0-.38.089.69.69 0 0 0-.339.506v.001a.68.68 0 0 0 .168.553.9.9 0 0 0 .41.235l.002.001c1.275.388 2.552.766 3.923 1.179l.496.15-.133-.5c-.16-.6-.314-1.098-.423-1.592a.67.67 0 0 0-.292-.434.6.6 0 0 0-.164-.065m2.613 3.73a.56.56 0 0 0-.274.003l-.362.097a.554.554 0 0 0-.392.678l1.105 4.123a.55.55 0 0 0 .677.39l.364-.098a.55.55 0 0 0 .392-.676L11.07 7.816a.55.55 0 0 0-.404-.396z"></path>
  <path fill="var(--material-icon-color, #8bc34a)" d="m21.578 9.77-2.203.59.59 2.203-5.508 1.476a2.28 2.28 0 0 0-1.612 2.793 2.28 2.28 0 0 0-2.79-1.61l-5.508 1.475-.59-2.205-2.203.59.59 2.205A2.28 2.28 0 0 0 5.138 18.9l4.406-1.18a2.28 2.28 0 0 1 2.792 1.61l.295 1.102 2.203-.59-.295-1.103a2.28 2.28 0 0 1 1.613-2.79l4.405-1.18a2.28 2.28 0 0 0 1.612-2.794v-.002z"></path>
</svg>
;
};

function HjsonIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={HjsonSvg} {...props} />
};

export default HjsonIcon;
