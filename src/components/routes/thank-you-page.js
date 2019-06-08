import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

function ThankYouPage() {
  return (
    <>
      <Title>Thanks for ordering!</Title>
      <Title level={2}>
        Your order is being processed, we will contact you.
      </Title>
    </>
  );
}

export default ThankYouPage;
