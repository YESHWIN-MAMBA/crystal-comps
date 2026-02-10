import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera, Html } from "@react-three/drei";
import { Suspense, useMemo } from "react";
import CrystalModel from "./CrystalModel";
import { useSectionTimeline } from "./useSectionTimeline";
import ErrorBoundary from "../components/ErrorBoundary";

function Loading() {
  return (
    <Html center>
      <div className="glass" style={{ padding: 12, borderRadius: 14 }}>
        Loading 3D…
      </div>
    </Html>
  );
}

export default function CrystalScene() {
  const timeline = useSectionTimeline([
    "home",
    "play",
    "how",
    "about",
    "contact",
  ]);

  const dpr = useMemo(() => (window.innerWidth <= 900 ? 1 : [1, 2]), []);

  return (
    <div className="threeLayer" aria-hidden="true">
      <ErrorBoundary>
        <Canvas dpr={dpr} gl={{ antialias: true, alpha: true }}>
          <Suspense fallback={<Loading />}>
            <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={45} />
            <ambientLight intensity={0.6} />
            <directionalLight position={[3, 4, 2]} intensity={1.2} />
            <directionalLight position={[-3, 2, -1]} intensity={0.6} />
            <Environment preset="city" />
            <CrystalModel timeline={timeline} />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}
