"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useBrowserClient } from "../../../hooks/useCustomKinde";

export const ClientComponentUser = () => {
  const { user, isLoading, getPermission } = useBrowserClient();
  const { isGranted: allowBlog } = getPermission("allow-blog") || {};

  if (isLoading) return <Skeleton className="w-full h-[170px] mb-4" />;

  return (
    <div className="border border-slate-200 rounded-lg p-4 overflow-auto mb-4">
      <pre className="text-sm text-slate-700">
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>
      {allowBlog ? "yes allowBlog" : "no allowBlog"}
    </div>
  );
};
