import { getServerSession } from "@/lib/getCustomKinde";

export default async function Page() {
  const { getUser, isAuthenticated, getRoles, getPermissions, getPermission } =
    getServerSession();
  const user = await getUser();
  return <main>Hello User Page {JSON.stringify(user, null, 2)}</main>;
}
