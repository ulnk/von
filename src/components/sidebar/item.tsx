import React from "react";
import { useNavigate } from "react-router-dom";

type ItemProps = {
  text: string;
  bottom?: boolean;
};

const Item = (props: ItemProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/${props.text.toLowerCase()}`)}
      className={`sidebar-item ${props.bottom && "bottom"} ${
        location.pathname.split("/")[1] === `${props.text.toLowerCase()}` &&
        "active"
      }`}
    >
      <span>{props.text}</span>
    </div>
  );
};

export default Item;
