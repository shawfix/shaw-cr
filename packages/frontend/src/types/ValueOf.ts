export type ValueOf<T, Keys extends keyof T = keyof T> = { [K in Keys]: T[K] }[Keys];
