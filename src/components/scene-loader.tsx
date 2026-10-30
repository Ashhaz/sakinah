"use client";

import dynamic from "next/dynamic";

const AmbientScene = dynamic(() => import("./ambient-scene"), {
  ssr: false,
  loading: () => null,
});

export function SceneLoader() {
  return <AmbientScene />;
}
