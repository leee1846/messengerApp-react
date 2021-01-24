import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to='/'>친구</Link>
      <Link to='/chat'>대화</Link>
    </div>
  );
};

export default Nav;
