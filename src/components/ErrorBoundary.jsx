import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, err: null };
  }

  static getDerivedStateFromError(err) {
    return { hasError: true, err };
  }

  componentDidCatch(err, info) {
    console.error("Three.js ErrorBoundary:", err, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="threeFallback glass">
          <div style={{ fontWeight: 800, marginBottom: 6 }}>
            3D failed to load
          </div>
          <div style={{ opacity: 0.8, fontSize: 14 }}>
            Check <code>/public/models/crystal-spinner.glb</code> exists and is
            valid.
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
