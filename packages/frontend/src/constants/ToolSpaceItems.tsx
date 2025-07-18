import type { Tool } from '../models/Tool';

import { ForkOutlined, GithubOutlined } from '@ant-design/icons';

import { Modules } from './Modules';

export const GitTool: Tool = {
  icon: <GithubOutlined />,
  name: Modules.git,
};

export const ForkTool: Tool = {
  icon: <ForkOutlined />,
  name: Modules.git,
};

export const ToolSpaceItems = [GitTool];
