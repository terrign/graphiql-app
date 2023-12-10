import { Component } from 'react';

interface State {
  hasError: boolean;
  errorMessage: string | null;
}
interface Props {
  children?: JSX.Element;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = { hasError: false, errorMessage: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, errorMessage: error.message };
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Oops something went wrong</h1>
          <p>{this.state.errorMessage}</p>
        </>
      );
    }

    return this.props.children;
  }
}
