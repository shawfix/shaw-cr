import { Button } from 'antd';
import { useCallback, useState } from 'react';

import { ToolPanelMap } from '../../../constants/ToolPanelMap';
import { ToolSpaceItems } from '../../../constants/ToolSpaceItems';

import styles from './index.module.css';

function ToolSpace(): React.ReactNode {
  const [activeTool, setActivedTool] = useState<string>('git');

  const changeTool = useCallback((tool: string): void => {
    setActivedTool(tool);
  }, []);

  return (
    <div className={styles['tool-space']}>
      <div className={styles['tool-bar']}>
        {ToolSpaceItems.map((tool) => (
          <Button
            type="text"
            className={`${styles['tool-icon']} ${activeTool === tool.name ? styles['tool-icon__active'] : ''}`}
            key={tool.name}
            onClick={() => changeTool(tool.name)}
          >
            {tool.icon}
          </Button>
        ))}
      </div>
      <div className={styles['tool-panel']}>
        <div className={styles['tool-name']}>{activeTool}</div>
        <div className={styles['tool-container']}>
          {ToolPanelMap[activeTool] ? ToolPanelMap[activeTool] : null}
        </div>
      </div>
    </div>
  );
}

export default ToolSpace;
