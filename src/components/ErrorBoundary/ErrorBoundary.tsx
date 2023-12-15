import { Button, Result } from 'antd';
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

  refreshPage = () => {
    window.location.reload();
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, errorMessage: error.message };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Result
          status="error"
          title="Oops, something went wrong"
          subTitle={`Error message: ${this.state.errorMessage}`}
          extra={[
            <Button key="console" onClick={this.refreshPage} type="primary">
              Try to reload
            </Button>,
          ]}
        />
      );
    }

    return this.props.children;
  }
}
