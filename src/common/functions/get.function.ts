// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export const get = (object: any, path: string, defaultValue: any) =>
  path.split(".")
  .reduce((o, k) => (o || {})[k] || defaultValue, object);
