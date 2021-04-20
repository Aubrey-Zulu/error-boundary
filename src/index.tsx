import React from "react";
import ReactDOM from "react-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "./component/pure/Container/Container";
import ErrorBoundary from "react-error-boundary";
import Fallback from "./component/pure/Fallback/Fallback";
import ThrowCounter from "./component/pure/ThrowCounter/ThrowCounter";

import "./index.scss";

function App() {
  return (
    <div className="App">
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            React ErrorBoundary Example
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        {/*
        Error boundaries catch Javascript errors anywhere in
        their child component tree.
        ErrorBoundary does not work in the following conditions:
        - For event handlers
        - For asynchronous code
        - For server side rendering
        - For errors thrown in the error boundary
        */}
        <ErrorBoundary FallbackComponent={Fallback}>
          <ThrowCounter />
        </ErrorBoundary>
      </Container>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
