const fs = require('fs');
const path = require('path');

const { XMLBuilder, XMLParser } = require('fast-xml-parser');
const xmlParser = new XMLParser({ ignoreAttributes: false });
const options = {
  ignoreAttributes: false, // 包含属性
  format: true, // 格式化输出
};
const xmlBuilder = new XMLBuilder(options);

const iconsPath = path.resolve(__dirname, './icons');
const fileIconsPath = path.resolve(__dirname, './fileIcons');
const iconNames = fs.readdirSync(iconsPath);

function numberToWord(num, subfix = '') {
  const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  return words[num] ? words[num] + subfix : num;
}

const COMP_NAME = '__COMP_NAME__';
const ICON_SVG = '__ICON_SVG__';

const template = `import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ${COMP_NAME}Svg(): React.ReactNode {
  return ${ICON_SVG};
};

function ${COMP_NAME}Icon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={${COMP_NAME}Svg} {...props} />
};

export default ${COMP_NAME}Icon;
`;

for (const iconName of iconNames) {
  const rawIconSvg = fs.readFileSync(path.resolve(iconsPath, iconName), 'utf-8');
  const iconSvgObj = xmlParser.parse(rawIconSvg);

  iconSvgObj.svg['@_width'] = '1em';
  iconSvgObj.svg['@_height'] = '1em';

  if (iconSvgObj.svg['@_fill']) {
    iconSvgObj.svg['@_fill'] = `var(--material-icon-color, ${iconSvgObj.svg['@_fill']})`;
  }

  if (iconSvgObj.svg.path) {
    if (Array.isArray(iconSvgObj.svg.path)) {
      iconSvgObj.svg.path = iconSvgObj.svg.path.map((p) => {
        return {
          ...p,
          ...(p['@_fill'] ? { '@_fill': `var(--material-icon-color, ${p['@_fill']})` } : void 0),
        };
      });
    } else {
      if (iconSvgObj.svg.path['@_fill']) {
        iconSvgObj.svg.path['@_fill'] =
          `var(--material-icon-color, ${iconSvgObj.svg.path['@_fill']})`;
      }
    }
  }

  const iconSvg = xmlBuilder.build(iconSvgObj);
  const compName = iconName
    .replace('.svg', '')
    .split('')
    .map((char) => numberToWord(char, '-'))
    .join('')
    .split(/-|_/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
  const iconCompPath = path.resolve(fileIconsPath, `${compName}.tsx`);

  fs.writeFileSync(
    iconCompPath,
    template.replaceAll(COMP_NAME, compName).replaceAll(ICON_SVG, iconSvg),
    { encoding: 'utf-8', flag: 'w' },
  );

  // break;
}
