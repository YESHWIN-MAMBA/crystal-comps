import { useEffect, useMemo, useState } from "react";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="authIcon" aria-hidden="true">
    <path
      d="M21.35 11.1H12v2.9h5.35c-.65 2.2-2.55 3.7-5.35 3.7a6 6 0 1 1 0-12c1.65 0 3.1.65 4.2 1.7l2.05-2.05A8.9 8.9 0 1 0 12 21c4.9 0 9-3.55 9-9 0-.65-.05-1.1-.15-1.9Z"
      fill="currentColor"
      opacity="0.9"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="authIcon" aria-hidden="true">
    <path
      d="M14 8.5V7.2c0-.7.4-1.2 1.3-1.2H17V3h-2.2C12.7 3 11.5 4.3 11.5 6.6V8.5H9v3h2.5V21H14v-9.5h2.6l.4-3H14Z"
      fill="currentColor"
      opacity="0.9"
    />
  </svg>
);

function useLockBodyScroll(isOpen) {
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);
}

export default function AuthModal({ open, onClose, defaultMode = "login" }) {
  const [mode, setMode] = useState(defaultMode); // "login" | "signup"
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) setMode(defaultMode);
  }, [open, defaultMode]);

  useLockBodyScroll(open);

  // close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const title = useMemo(
    () => (mode === "login" ? "Welcome back" : "Create your account"),
    [mode],
  );

  const description = useMemo(
    () =>
      mode === "login"
        ? "Sign in to view your entries, manage your cart, and track live draws."
        : "Join in seconds. Save your tickets, get alerts, and checkout faster next time.",
    [mode],
  );

  if (!open) return null;

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Dummy submit
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    onClose?.();
  };

  const oauth = async (provider) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    alert(`Dummy ${provider} auth`);
  };

  return (
    <div
      className="modalRoot"
      role="dialog"
      aria-modal="true"
      aria-label="Authentication"
    >
      <button
        className="modalOverlay"
        onClick={onClose}
        aria-label="Close modal overlay"
      />

      <div className="authModal glass" onClick={(e) => e.stopPropagation()}>
        <div className="authTop">
          <div>
            <div className="authTitle">{title}</div>
            <div className="authDesc">{description}</div>
          </div>

          <button
            className="iconBtn authClose"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="authTabs" role="tablist" aria-label="Auth tabs">
          <button
            className={`authTab ${mode === "login" ? "active" : ""}`}
            onClick={() => setMode("login")}
            type="button"
            role="tab"
            aria-selected={mode === "login"}
          >
            Login
          </button>
          <button
            className={`authTab ${mode === "signup" ? "active" : ""}`}
            onClick={() => setMode("signup")}
            type="button"
            role="tab"
            aria-selected={mode === "signup"}
          >
            Sign up
          </button>
          <span className={`authTabIndicator ${mode}`} aria-hidden="true" />
        </div>

        <div className="authOauth">
          <button
            className="authOauthBtn"
            type="button"
            onClick={() => oauth("Google")}
            disabled={loading}
          >
            <span className="authOauthLogo">
              <GoogleIcon />
            </span>
            Continue with Google
          </button>

          <button
            className="authOauthBtn"
            type="button"
            onClick={() => oauth("Facebook")}
            disabled={loading}
          >
            <span className="authOauthLogo">
              <FacebookIcon />
            </span>
            Continue with Facebook
          </button>
        </div>

        <div className="authDivider">
          <span />
          <div>or</div>
          <span />
        </div>

        <form className="authForm" onSubmit={submit}>
          <label className="authLabel">
            Username
            <input
              className="input authInput"
              placeholder="yourname"
              autoComplete="username"
              required
            />
          </label>

          <label className="authLabel">
            Password
            <input
              className="input authInput"
              placeholder="••••••••"
              type="password"
              autoComplete={
                mode === "login" ? "current-password" : "new-password"
              }
              required
            />
          </label>

          <div className="authRow">
            {mode === "login" ? (
              <label className="authCheck">
                <input type="checkbox" defaultChecked />
                Remember me
              </label>
            ) : (
              <div className="authSmall">
                By continuing you agree to our <a href="#terms">Terms</a>.
              </div>
            )}

            {mode === "login" && (
              <a className="authSmallLink" href="#forgot">
                Forgot password?
              </a>
            )}
          </div>

          <button
            className="btn primary authSubmit"
            disabled={loading}
            type="submit"
          >
            {loading
              ? "Please wait…"
              : mode === "login"
                ? "Login"
                : "Create account"}
          </button>

          <div className="authFooter">
            {mode === "login" ? (
              <>
                New here?{" "}
                <button
                  className="linkBtn"
                  type="button"
                  onClick={() => setMode("signup")}
                >
                  Create an account
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  className="linkBtn"
                  type="button"
                  onClick={() => setMode("login")}
                >
                  Login
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
