import { lazy, Suspense } from 'react';
import HomeView from "../homeView/homeView";
const Remote = lazy(
  // @ts-ignore
  async () => import("remote/remote-app")
);

export default function Home() {
  return (
    <>
      <HomeView />
      <Suspense fallback={<div>Loading...</div>}>
        <Remote />
      </Suspense>
    </>
  )
}
