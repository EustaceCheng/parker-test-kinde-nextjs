export const PERMISSIONS = [
  "allow-blog",
  "allow-design-website",
  "allow-employee-info",
  "allow-recruitment",
] as const;

export type PermissionKey = (typeof PERMISSIONS)[number];
