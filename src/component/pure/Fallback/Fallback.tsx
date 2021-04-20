import React from "react";
import "./Fallback.scss";

const Fallback = ({ componentStack, error }) => (
  <section className="fallback">
    <header className="fallback__header">
      <h3 className="fallback__title">Oops! An error occured!</h3>
    </header>
    <div className="fallback__body">
      <p>
        <strong>Error:</strong> {error.toString()}
      </p>
      <p>
        <strong>Stacktrace:</strong> {componentStack}
      </p>
    </div>
  </section>
);

export default Fallback;
