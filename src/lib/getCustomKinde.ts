import { PermissionKey } from "@/constants/permissions";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
export const getServerSession = () => {
  const { getPermission: originalGetPermission, ...rest } =
    getKindeServerSession();

  const getPermission = (key: PermissionKey) => {
    return originalGetPermission(key);
  };

  return {
    ...rest,
    getPermission,
  };
};
