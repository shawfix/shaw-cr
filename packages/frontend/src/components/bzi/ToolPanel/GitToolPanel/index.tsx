import type { CollapseProps } from 'antd';

import CollapseWrap from '../../../CollapseWrap';
import MeterialIcon from '../../../MaterialIcon';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'CHANGES',
    children: (
      <p>
        <MeterialIcon />
        {text}
      </p>
    ),
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
  {
    key: '4',
    label: 'CHANGES',
    children: <p>{text}</p>,
  },
  {
    key: '5',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '6',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
  {
    key: '7',
    label: 'CHANGES',
    children: <p>{text}</p>,
  },
  {
    key: '8',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '9',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
];

function GitToolPanel(): React.ReactNode {
  return <CollapseWrap items={items} defaultActiveKey={['1']} />;
}

export default GitToolPanel;
