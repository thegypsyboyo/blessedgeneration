"use client"
// ./nextjs-pages/src/components/PreviewProvider.tsx


import dynamic from "next/dynamic";
import { suspend } from "suspend-react";

const LiveQueryProvider = dynamic(() => import("@sanity/preview-kit"));

// suspend-react cache is global, so we use a unique key to avoid collisions
const UniqueKey = Symbol("../../sanity/lib/client");



export default function PreviewProvider({
  children,
  token,
}: {
  children: React.ReactNode;
  token: string;
}) {
  const { client } = suspend(
    () => import("@/lib/sanity.client"),
    [UniqueKey]
  );
  if (!token) {
    throw new TypeError("Missing token");
  }
  return (
    <LiveQueryProvider
      client={client}
      token={token}
      // Uncomment below to see debug reports
      logger={console}
    >
      {children}
    </LiveQueryProvider>
  );
}