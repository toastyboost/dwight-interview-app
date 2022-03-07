export function objectKeys<T extends Record<string, unknown>>(
  o: T
): Array<keyof T> {
  return Object.keys(o) as Array<keyof T>;
}
