import { ForkOutlined, GithubOutlined } from '@ant-design/icons';

import { ToolNames } from './ToolNames';

import type { ToolD } from '../models/ToolD';

export const GitTool: ToolD = {
  icon: <GithubOutlined />,
  name: ToolNames.git,
};

export const ForkTool: ToolD = {
  icon: <ForkOutlined />,
  name: ToolNames.fork,
};

export const ToolSpaceItems = [GitTool, ForkTool];
