import React from "react";
import { Typography, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { Button } from "antd/lib/radio";

const { Title } = Typography;

function ThankYouPage() {
  return (
    <div>
      <Row>
        <Col span={12} offset={6}>
          <Title>Thanks for ordering!</Title>
          <Title level={4}>
            Your order is being processed, we will contact you.
          </Title>

          <Button>
            <Link to="/restaurants">Explore more</Link>
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default ThankYouPage;
