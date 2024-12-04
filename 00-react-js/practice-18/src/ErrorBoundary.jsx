import React from "react";

// toDo 왜 아래와 같이 작성하는지 파악해야됨
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error captured by Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>{this.props.fallback || "Something went wrong."}</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
