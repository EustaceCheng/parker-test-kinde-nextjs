import { PermissionKey } from "@/constants/permissions";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export const useBrowserClient = () => {
  const { getPermission: originalGetPermission, ...rest } =
    useKindeBrowserClient();

  const getPermission = (key: PermissionKey) => {
    return originalGetPermission(key);
  };

  return {
    ...rest,
    getPermission,
  };
};
