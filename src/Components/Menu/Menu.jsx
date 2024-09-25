import React from "react";

const Menu = (props) => {
  return (
    <div>
      <a href="" className="hover:text-light-green">
        {props.name}
      </a>
    </div>
  );
};

export default Menu;
