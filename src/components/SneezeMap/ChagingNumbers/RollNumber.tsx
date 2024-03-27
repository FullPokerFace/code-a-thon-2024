/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useSpring, animated } from "react-spring";
import { Typography } from "@mui/material";

interface RollNumberProps {
  number: number;
}

const RollNumber: React.FC<RollNumberProps> = ({ number }) => {
  const props = useSpring({ number, from: { number: 0 } });

  return (
    <Typography variant="h4">
      <animated.span>{props.number.to((n: any) => n.toFixed(0))}</animated.span>
    </Typography>
  );
};

export default RollNumber;
