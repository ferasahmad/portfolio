export function getEnv(key: string): string {
  const value = process.env[key];
  if (!value) throw new Error(`process.env.${key} is undefined.`);
  return value;
}