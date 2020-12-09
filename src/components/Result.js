import React from "react";
import { Skeleton } from "antd";

const Result = ({ state }) => {
  const afterState = <p>Result</p>;
  return <>{state ? <Skeleton active /> : afterState}</>;
};

export default Result;
