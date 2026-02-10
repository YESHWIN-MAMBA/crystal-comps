# CrystalComps — Three.js + React (Vite) Single Page App

A modern single-page React application built with Vite and a Three.js-powered background experience.
It features a GLB model that animates across sections as the user scrolls (left to right), supports light and dark modes, and uses a polished glassmorphism UI.

---

## Tech Stack

### Frontend

- React — UI composition and state management
- Vite — fast dev server and production bundling
- CSS (Vanilla) — custom glass UI, responsive layout, hover shine effects

### 3D / WebGL

- three — core 3D renderer
- @react-three/fiber — React renderer for Three.js (declarative scene graph)
- @react-three/drei — helpers (GLTF loading, environment presets, presentation controls)

### Utilities

- clsx — conditional className utility (used for clean component styling)

---

## Project Features

### Scroll-synced 3D Model Motion

A GLB model (`/public/models/crystal-spinner.glb`) is rendered in a fixed background canvas and animated based on the user’s scroll position.

- The animation is section-aware: it uses real DOM offsets for sections instead of a generic 0..1 scroll value.
- The model transitions smoothly between keyframes:
  - Hero starts on the right
  - Play Now moves to the left
  - How to Play moves to the right
  - About Us moves to the left
  - Newsletter centers
- Includes subtle floating movement and continuous self-spin.

### Hero Interactivity (Drag to Rotate)

On the hero section only, the model supports user interaction:

- Drag to rotate orientation (PresentationControls)
- Model continues spinning around its own axis even while dragging

### Modern Glassmorphism UI

- Semi-translucent “glass” cards and header
- Consistent rounded corners, subtle borders and shadows
- Hover shine sweep effect on glass cards

### Light and Dark Mode

- Theme toggle persists to localStorage
- Uses CSS variables plus a data-theme attribute on the html element
- Section headings use a metallic style:
  - Dark mode: metallic silver
  - Light mode: “black diamond” faceted gradient

### Responsive Navigation

- Desktop: centered nav links plus actions aligned to the right
- Mobile: hamburger button opens a drawer menu
- Mobile background gradients are toned down for clarity and performance

### Login / Signup Modal (Realistic UI)

A glass-themed auth modal with:

- Login / Sign up tabs
- Username and password inputs
- “Continue with Google / Facebook” buttons (dummy actions)
- Accessible overlay, ESC-to-close, and body scroll lock

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

### Build for production

```bash
npm run build
npm run preview
```

---

## Assets

Place the following in public:

- public/models/crystal-spinner.glb
- public/images/prize.jpg (any placeholder image)

The model is loaded from:

- /models/crystal-spinner.glb

---

## Architecture Overview

### Folder Structure (key parts)

```
src/
  app/
    App.jsx
  components/
    Header.jsx
    ThemeToggle.jsx
    AuthModal.jsx
    GlassCard.jsx
    SectionShell.jsx
    ProgressBar.jsx
    QuantitySelector.jsx
  sections/
    Hero.jsx
    PlayNow.jsx
    HowToPlay.jsx
    AboutUs.jsx
    Newsletter.jsx
    Footer.jsx
  three/
    CrystalScene.jsx
    CrystalModel.jsx
    useSectionTimeline.js
  styles/
    globals.css
```

### How the 3D scroll animation works

- useSectionTimeline(sectionIds) measures section top offsets and outputs a timeline value like:
  - 0.0 to 0.99 while scrolling through #home
  - 1.0 to 1.99 while scrolling through #play
  - and so on
- CrystalModel maps timeline into keyframes and interpolates:
  - position (x/y/z)
  - rotation (x/y/z)
  - scale
- Smooth-follow interpolation avoids jitter when scrolling stops.

### Content layout (model visibility)

Sections can use SectionShell to reserve a side lane so the model remains visible behind the content:

- side="left" puts content left and reserves space right
- side="right" reserves space left and puts content right
  Newsletter intentionally stays centered.

---

## Customization

### Adjust model positions per section

Edit the keys array in:

- src/three/CrystalModel.jsx

Example: center model in newsletter:

```js
{ pos: V(0.0, -0.05, 0), ... }
```

### Change the glass shine hover

Edit the ::before gradient and animation in:

- src/styles/globals.css

### Improve 3D look (optional)

Common improvements:

- tweak the Environment preset or intensity
- add postprocessing (bloom) if desired
- adjust camera position or model scale

---

## Notes

- All auth flows are UI-only. Integrate real authentication later.
- The project is intentionally modular to support scaling into a full app.

---

## License

Internal / private project (update as needed).
