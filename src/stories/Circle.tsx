import React from "react";

type Props = {
  variant: "orange" | "blue" | "yellow";
};

function Circle({ variant }: Props) {
  let bgColor;

  switch (variant) {
    case "orange":
      bgColor = "bg-orange-500";
      break;
    case "blue":
      bgColor = "bg-blue-500";
      break;
    case "yellow":
      bgColor = "bg-yellow-500";
      break;
  }

  return <div className={`${bgColor} w-14 h-14 p-2 rounded-full`}></div>;
}

export default Circle;
