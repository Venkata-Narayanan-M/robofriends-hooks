import React from "react";

const Header = () => {
  console.log("Header Component");
  return (
    <>
      <h1 className="f1">RoboFriends</h1>
    </>
  );
};

export default React.memo(Header);
