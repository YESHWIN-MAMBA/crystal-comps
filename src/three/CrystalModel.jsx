import { useGLTF, PresentationControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function useHeroActive() {
  // heroActive when timeline is near section 0
  // tweak threshold as desired
  return (timeline) => timeline < 0.85;
}

useGLTF.preload("/models/crystal-spinner.glb");

const clamp = THREE.MathUtils.clamp;

function lerp(a, b, t) {
  return a + (b - a) * t;
}

export default function CrystalModel({ timeline }) {
  const { scene } = useGLTF("/models/crystal-spinner.glb");

  // Outer group is driven by scroll keyframes (position/scale/rough rotation)
  const outer = useRef();

  // This group spins continuously around its own axis
  const spin = useRef();

  const keys = useMemo(() => {
    const V = (x, y, z) => new THREE.Vector3(x, y, z);
    const E = (x, y, z) => new THREE.Euler(x, y, z);

    return [
      { pos: V(1.85, 0.1, 0), rot: E(0.15, 0.8, 0.05), scale: 0.55 }, // hero right
      { pos: V(-1.85, 0.05, 0), rot: E(0.25, 2.2, -0.05), scale: 0.85 }, // play left
      { pos: V(1.75, 0.05, 0), rot: E(0.35, 3.4, 0.08), scale: 0.72 }, // how right
      { pos: V(-1.75, 0.0, 0), rot: E(0.65, 4.8, -0.1), scale: 0.62 }, // about left
      { pos: V(5.0, -2, 0), rot: E(0.25, 6.0, 0.03), scale: 0.6 }, // newsletter settle
    ];
  }, []);

  useFrame((state, delta) => {
    const o = outer.current;
    if (!o) return;

    const tline = clamp(timeline, 0, keys.length - 1.000001);
    const i = Math.floor(tline);
    const t = tline - i;

    const a = keys[i];
    const b = keys[i + 1] ?? keys[i];

    const tx = lerp(a.pos.x, b.pos.x, t);
    const ty = lerp(a.pos.y, b.pos.y, t);
    const tz = lerp(a.pos.z, b.pos.z, t);

    const rx = lerp(a.rot.x, b.rot.x, t);
    const ry = lerp(a.rot.y, b.rot.y, t);
    const rz = lerp(a.rot.z, b.rot.z, t);

    const sc = lerp(a.scale, b.scale, t);

    o.position.lerp(new THREE.Vector3(tx, ty, tz), 0.12);
    o.rotation.x = lerp(o.rotation.x, rx, 0.12);
    o.rotation.y = lerp(o.rotation.y, ry, 0.12);
    o.rotation.z = lerp(o.rotation.z, rz, 0.12);
    o.scale.lerp(new THREE.Vector3(sc, sc, sc), 0.12);

    // Float
    const time = state.clock.getElapsedTime();
    o.position.y += Math.sin(time * 1.6) * 0.0025;

    // Continuous spin around its own axis (local)
    if (spin.current) {
      spin.current.rotation.y += delta * 0.9; // spin speed
    }
  });

  const heroActive = timeline < 0.85; // only interactive in hero

  return (
    <group ref={outer}>
      {heroActive ? (
        <PresentationControls
          global={false}
          enabled={true}
          snap={false}
          speed={1.1}
          zoom={1}
          rotation={[0, 0, 0]}
          polar={[-0.6, 0.6]} // limit vertical rotation
          azimuth={[-1.2, 1.2]} // limit horizontal rotation
        >
          <group ref={spin}>
            <primitive object={scene} />
          </group>
        </PresentationControls>
      ) : (
        <group ref={spin}>
          <primitive object={scene} />
        </group>
      )}
    </group>
  );
}
