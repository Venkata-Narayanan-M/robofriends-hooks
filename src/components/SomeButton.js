import { memo } from "react";

const SomeButton = (props) => {
  console.log("Some Button");

  return (
    <div>
      <button>Count: {props.count}</button>
    </div>
  );
};

export default memo(SomeButton);
