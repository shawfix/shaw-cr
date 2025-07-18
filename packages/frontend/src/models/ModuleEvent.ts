import type { ValueOf } from '../types/ValueOf';

import { Modules } from '../constants/Modules';
import { ModuleActions } from '../constants/ModuleActions';

export type ModuleEvent<D, Keys extends keyof typeof Modules, A = typeof ModuleActions> = {
  module: (typeof Modules)[Keys];
  action: ValueOf<A>;
  data: D;
};
