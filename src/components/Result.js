import React from "react";
import { Skeleton, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const Result = ({ data, state }) => {
  const afterState = (
    <div>
      <img src={data} alt="Caret System's Generated QR Code" />
      <br />

      <a style={{ color: "white" }} href={data} download="caretsys.tech-qr.png">
        <Button type="primary" icon={<DownloadOutlined />}>
          &nbsp; Download
        </Button>
      </a>
    </div>
  );
  return (
    <>
      {state ? <Skeleton active /> : null} {data ? afterState : null}
    </>
  );
};

export default Result;
