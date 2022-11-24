import React from "react";
import { useNavigate } from "react-router-dom";

type ItemProps = {
  text: string;
  path: string;
  bottom?: boolean;
};

const Item = (props: ItemProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(props.path)}
      className={`sidebar-item ${props.bottom && "bottom"} ${
        location.pathname === props.path && "active"
      }`}
    >
      <span>{props.text}</span>
    </div>
  );
};

export default Item;
