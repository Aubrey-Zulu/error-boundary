import React, { useState } from "react";

import Button from "@material-ui/core/Button";

const ThrowCounter = () => {
  const [count, setCount] = useState(5);

  const throwCounterClickHandler = (e) => {
    e.preventDefault();
    setCount(count - 1);
  };

  if (count <= 0) {
    throw new Error("Counter threw an error!");
  }

  return (
    <Button
      color="primary"
      variant="outlined"
      onClick={(e) => throwCounterClickHandler(e)}
    >
      Throw Error in {count} clicks.
    </Button>
  );
};

export default ThrowCounter;
