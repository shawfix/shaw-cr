import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function CodecovSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ec407a)" d="M12.006 2.375c-5.528.004-10.028 4.471-10.032 9.959v.025l1.706.995.023-.016a4.9 4.9 0 0 1 3.641-.773 4.75 4.75 0 0 1 2.398 1.193l.293.273.166-.363c.16-.35.346-.68.55-.98a8 8 0 0 1 .278-.372l.172-.215-.211-.176a7 7 0 0 0-3.249-1.516 7.16 7.16 0 0 0-3.359.196c.812-3.556 3.939-6.036 7.631-6.039a7.78 7.78 0 0 1 5.516 2.267 7.7 7.7 0 0 1 2.095 3.759 7.2 7.2 0 0 0-2.09-.317h-.127a7 7 0 0 0-.829.061l-.034.005a6 6 0 0 0-.327.05 7 7 0 0 0-.47.101l-.115.03q-.202.055-.403.12l-.025.008a7 7 0 0 0-.878.367l-.023.012a7 7 0 0 0-.392.214l-.03.018a6.8 6.8 0 0 0-1.77 1.516l-.063.076a7 7 0 0 0-.557.799l-.05.087a7 7 0 0 0-.195.36l-.014.025a7 7 0 0 0-.367.888l-.015.044a6.9 6.9 0 0 0-.343 2.264l.001.094a10 10 0 0 0 .018.33l.014.155.021.19.005.034.011.086q.022.158.052.316c.202 1.057.706 2.115 1.458 3.058l.034.042.035-.041c.3-.355 1.044-1.479 1.107-2.154l.001-.012-.006-.011a4.7 4.7 0 0 1-.535-2.169c0-2.52 1.982-4.613 4.51-4.764l.165-.006a4.96 4.96 0 0 1 2.9.856l.023.016 1.684-.979.022-.013v-.025a9.84 9.84 0 0 0-2.934-7.039 10 10 0 0 0-7.087-2.91"></path>
</svg>
;
};

function CodecovIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={CodecovSvg} {...props} />
};

export default CodecovIcon;
