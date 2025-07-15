import { Button } from 'antd';
import { useState } from 'react';

import { ToolPanelMap } from '../../../constants/ToolPanelMap';
import { ToolSpaceItems } from '../../../constants/ToolSpaceItems';

import styles from './index.module.css';

function ToolSpace(): React.ReactNode {
  const [activedTool, setActivedTool] = useState<string>('git');

  const changeTool = function (tool: string): void {
    setActivedTool(tool);
  };

  return (
    <div className={styles['tool-space']}>
      <div className={styles['tool-bar']}>
        {ToolSpaceItems.map((tool) => (
          <Button
            type="text"
            className={`${styles['tool-icon']} ${activedTool === tool.name ? styles['tool-icon__actived'] : ''}`}
            key={tool.name}
            onClick={() => changeTool(tool.name)}
          >
            {tool.icon}
          </Button>
        ))}
      </div>
      <div className={styles['tool-panel']}>
        <div className={styles['tool-name']}>{activedTool}</div>
        <div className={styles['tool-container']}>
          {ToolPanelMap[activedTool] ? ToolPanelMap[activedTool] : null}
        </div>
      </div>
    </div>
  );
}

export default ToolSpace;
