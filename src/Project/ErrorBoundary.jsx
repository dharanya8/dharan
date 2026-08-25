import React from "react";

// Catches render/lifecycle errors so an unexpected failure shows a message
// instead of an empty page, and is still reported to the console.
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error("Unhandled UI error:", error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: "40px", textAlign: "center", fontFamily: "inherit" }}>
          <h2>Something went wrong</h2>
          <p role="alert">{this.state.error.message}</p>
          <button
            className="explore-btn mt-2"
            onClick={() => window.location.assign("/")}
          >
            Back to home
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
