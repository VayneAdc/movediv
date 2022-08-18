import React, { useEffect, useState } from "react";

export default function MoveDiv(props) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    console.log(props);
    if (!props.canMove) {
      return;
    }
    const left = event.clientX - event.target.offsetLeft;
    const top = event.clientY - event.target.offsetTop;
    setCoords({
      x: left,
      y: top,
    });
    props.handlePostion(left, top);
  };

  return (
    <div onMouseMove={handleMouseMove} className={"move-div"}>
      <h1>{props.canMove}</h1>
      <div className={"content"}>{props.children}</div>
    </div>
  );
}
