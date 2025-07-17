import { ForkOutlined, GithubOutlined } from '@ant-design/icons';

import { ToolNames } from './ToolNames';

import type { Tool } from '../models/Tool';

export const GitTool: Tool = {
  icon: <GithubOutlined />,
  name: ToolNames.git,
};

export const ForkTool: Tool = {
  icon: <ForkOutlined />,
  name: ToolNames.fork,
};

export const ToolSpaceItems = [GitTool, ForkTool];
